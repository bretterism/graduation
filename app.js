var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./user');

mongoose.connect('mongodb://localhost/gradDB');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile('/public/index.html');
});

app.post('/code', function(req, res) {
	User.findOne({code: req.body.code}, function(err, user) {
		if (user) {
			user.usedCode = Date.now();
			user.save(function(err) {
				if (err) throw err;
				console.log('User ' + user.name + ' used code at: ' + user.usedCode);
			});
			res.status(200).json({
				name: user.name,
				email: user.email,
				attOpenH: user.attOpenH
			});
		} else {
			res.status(400).end()
		}
		
	});
});

app.post('/form', function(req, res) {
	console.log(req.body);
	res.end();
});

var ip = 'localhost';
var port = 8082
var server = http.createServer(app);
server.listen(port, ip, function() {
	console.log('listening at http://' + ip + ':' + port)
});