var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'userdata'
});

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM users WHERE username = ? AND password = ?', 
		[username, password], 
		function(error, results, fields) {
			if (error) {
				console.log(error);
			}
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('http://localhost:8080/index.html');
			} else {
				response.redirect('http://localhost:8080/incorrect.html');
				// response.send('Incorrect Username or Password! Please go back.');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// app.get('/index.html', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

app.listen(3000);

