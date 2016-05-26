var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
	name: {type: String, required: true},
	code: String,
	email: String,
	attOpenH: Boolean,
	notes: String,
	usedCode: Date,
	RSVPd: Date
});

userSchema.statics.report = function(cb) {
	var users = []
	this.find({}, 'code name email attOpenH notes usedCode RSVPd', function(err, response) {
		response.forEach(function(user) {
			users.push(user);
		});
		cb(users);
	});
}

mongoose.model('User', userSchema)
var User = mongoose.model('User', userSchema);

module.exports = User;