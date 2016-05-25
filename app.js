var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./user');
var session = require('express-session');

mongoose.connect('mongodb://localhost/gradDB');

var sessOptions = {
	// store: new FileStore,
	secret: 'somesecret',
	cookie: {},
	resave: false,
	saveUninitialized: false,
	name: 'my.grad.sid'
};

app.use(session(sessOptions));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile('/public/index.html');
});


// When a user enters the code to enter the site.
app.post('/code', function(req, res) {
	User.findOne({code: req.body.code}, function(err, user) {
		if (user) {
			// save the code for the form submission later.
			req.session.code = req.body.code;

			user.usedCode = Date.now();
			user.save(function(err) {
				if (err) { throw err; }
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

// When a user updates the RSVP form.
app.post('/form', function(req, res) {
	User.findOne({code: req.session.code}, function(err, user) {
		user.name = req.body.name;
		user.email = req.body.email;
		user.attOpenH = req.body.attOpenH;
		user.notes = req.body.notes;
		user.RSVPd = Date.now();

		user.save(function(err) {
			if (err) { throw err; }
		});
	});
	res.end();
});

var ip = 'localhost';
var port = 8082
var server = http.createServer(app);
server.listen(port, ip, function() {
	console.log('listening at http://' + ip + ':' + port)
});