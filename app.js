var express = require('express');
var app = express();
var http = require('http');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gradDB');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile('/public/index.html');
});

var ip = 'localhost';
var port = 8082
var server = http.createServer(app);
server.listen(port, ip, function() {
	console.log('listening at http://' + ip + ':' + port)
});