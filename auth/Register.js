const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { validateSignupData } = require('../Validation/Validata');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ksgold01'
})
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

exports.Register = (req,res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        Cpassword: req.body.Cpassword
    };
    var Hashpassword = bcrypt.hashSync(newUser.password, 10, (err,hash) => {if(err) throw err;});
    var Cpassword = bcrypt.hashSync(newUser.Cpassword, 10, (err,hash) => {if(err) throw err;});
    const { valid, errors } = validateSignupData(newUser);
    if(!valid) return res.status(400).json(errors);

    const create_user = `INSERT INTO users (username, email, password, Cpassword) VALUES('${newUser.username}','${newUser.email}','${Hashpassword}','${Cpassword}')`;
    connection.query('SELECT * FROM users WHERE username = ? OR email = ?', [newUser.username, newUser.email], function(err, results, fields) {
        if (results.length > 0) {
            res.send("username or email already exist");
        } else {
            connection.query(create_user, (err,results) => {
                if (!err) {
                    return res.send("User createad successfully");
                } else
                    return res.status(400).json(err);
            });
        }
    });
}
connection.connect(function(err) {
    if(err) throw err;
})