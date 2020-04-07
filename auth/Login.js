const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var session = require('express-session');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ksgold01'
})
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

exports.Login = (request, response) => {
	var username = request.body.username;
    var password = request.body.password;

    if (username && password) {
        connection.query('SELECT * FROM users WHERE username = ? ',[username], function(err, results) {
            if(err)
                return response.json(err);
            if (!results.length) {
                return response.send('loginMessage: No User Found');
            }
            if(bcrypt.compareSync(password, results[0].password)) {
                request.session.loggedin = true;
                request.session.username = username;
                return response.send("Login Successfully");
            } else {
                return response.send("Wrong Password");
            }
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
}

connection.connect(function(err) {
    if(err) throw err;
})