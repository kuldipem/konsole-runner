var mongoose = require('mongoose');



CmdsSchema = mongoose.Schema({
	user_id:  String,
	name: String,
	output: String
});


var CmdOutput = mongoose.model("CmdOutput", CmdsSchema);
module.exports = CmdOutput;