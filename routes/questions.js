var express = require('express');
var router = express.Router();
var pg = require('./db');

router.post('/getQuestions', function(req, res){
	console.log('made it');
	pg.client.query('SELECT * from sampleQuiz;', [], function (err, result) {
		for(i = 0; i < result.rows.length; i++){
			console.log(result.rows[i]);
		}
	});
});

module.exports = router; 