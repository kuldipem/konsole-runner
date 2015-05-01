var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
	mongoose.connect('mongodb://konsole:runner@ds031972.mongolab.com:31972/konsole-runner');
var Cmds = mongoose.model('Cmds', { name: String, output: String });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.post('/cmd', function(req, res, next) {

	
	

	

	var cmdVal=req.body.cmd;
    
	var sys = require('sys')

	var exec = require('child_process').exec;

	function puts(error, stdout, stderr) { 

		res.send(stdout);

		// store data into mongodb
		var out = new Cmds({ name: req.body.cmd, output: stdout });

		out.save(function (err) {
		  	if (err) // ...
		  		console.log('error');
		});

	 }

	exec(req.body.cmd, puts);	

});

module.exports = router;
