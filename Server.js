const express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
const { Register } = require('./auth/Register');
const { Login } = require('./auth/Login');
const app = express();
const port = process.event.PORT || 5000;
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())

//authentification
app.post("/register", Register);
app.post("/login", Login);
//Course Search


app.listen(port, () => console.log(`Example ${port}`));