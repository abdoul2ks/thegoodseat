/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  register:function(req,res) {
    const Users = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      Cpassword: req.body.Cpassword
    };
    var Hashpassword = bcrypt.hashSync(Users.password, 10, (err) => { if (err) {return err;}});
    var HashConfirmpassword = bcrypt.hashSync(Users.Cpassword, 10, (err) => {if (err) {return err;}});
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Users.email)))
    {
      return res.send('You have entered an invalid email address!');
    } else {
      var insert = 'INSERT INTO user(username, email, password, Cpassword) VALUES("'+Users.username+'",\''+Users.email+'\',\''+Hashpassword+'\',\''+HashConfirmpassword+'\')';
      User.getDatastore().sendNativeQuery(insert,(err) => {
        if(err)
        {
          return res.status(400).json(err);
        } else {
          return res.status(200).json({'message': 'User created successfully'});
        }
      });
    }
  },
  Login:function(req,res) {
    const Users = {
      username: req.body.username,
      password: req.body.password,
    };
    if (!Users.username || !Users.password) {
      return res.send('the fields cannot be empty');
    } else {
      User.find({where: {username:Users.username},})
        .then(users => {
          if (!users) {
            return res.status(401).json('loginMessage: No User Found please create one !');
          } else {
            if(bcrypt.compareSync(Users.password, users[0].password)) {
              const token = jwt.sign(
                {
                  username: Users.username,
                  userId: users[0].id
                },
                process.env.JWT_KEY,
                {
                  expiresIn: '1h'
                }
              );

              return res.status(200).json({
                message: 'Auth successful',
                token: token
              });
            } else {
              return res.status(401).json('Wrong Password');
            }
          }
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    }
  }
};
