var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
	name: {type: String, required: true},
	code: String,
	email: String,
	attOpenH: Boolean,
	usedCode: Date,
	RSVPd: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;