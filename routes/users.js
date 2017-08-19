var express = require('express');
var router = express.Router();
var pg = require('./db');
//var app = require('../app');


router.post('/login', function(req, res){
	console.log(req.body);
	var username = req.body.username;
	var password = req.body.password; 
	var loggedIn = false; 

	pg.client.query('SELECT username, password FROM users;', [], function (err, result) {
		console.log(result.rows);
		for(i = 0; i < result.rows.length; i++){
			if(username == result.rows[i].username && password == result.rows[i].password){
				loggedIn = true;
				console.log("Success");
				res.json({'Success': loggedIn});
				return res.end();
			}
		}
	});

});

router.post('/getQuestions', function(req, res){
	pg.client.query('SELECT * from sampleQuiz;', [], function (err, result) {
		res.json(result.rows);
		// for(i = 0; i < result.rows.length; i++){
		// 	res.json(result.rows[i]);
		// }
		return res.end();
	});
});

router.post('getUserStatus', function(req, res){
	pg.client.query('SELECT * FROM userstatus WHERE username = ' + req.body.username + ';', [], function(err, result){
		res.json(result.rows);
		return res.end();
	});
});

router.post('getAllUsers', function(req, res){
	pg.client.query('SELECT * FROM userstatus', [], function(err, result){
		res.json(result.rows);
		return res.end();
	});
});

// router.post('/updateQuizStatus', function(req, res){
// 	var quiz = req.body.quizType;
// 	pg.client.query('UPDATE TABLE set ' )
// });

module.exports = router;
