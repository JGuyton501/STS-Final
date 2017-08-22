var express = require('express');
var router = express.Router();
var pg = require('./db');
//var app = require('../app');


router.post('/login', function(req, res){
	var username = req.body.username;
	var password = req.body.password; 
	var loggedIn = false; 

	pg.client.query('SELECT firstname, password, admin, threed FROM users;', [], function (err, result) {
		for(i = 0; i < result.rows.length; i++){
			if(username == result.rows[i].firstname && password == result.rows[i].password){
				loggedIn = true;
				console.log(result.rows[i]);
				admin = result.rows[i].admin;
				console.log(admin);
				res.json({'Success': loggedIn, 'admin': admin});
				return res.end();
			}
		}
	});

});

router.post('/getQuestions', function(req, res){
	var category = req.body.category; 
	//console.log(category);
	pg.client.query('SELECT * from ' + category + ';', [], function (err, result) {
		res.json(result.rows);
		return res.end();
	});
});

router.post('/getQuizzes', function(req, res){
	pg.client.query('SELECT * FROM quizzes', [], function(err, result){
		res.json(result.rows);
		return res.end();
	});
});

router.post('/getUserStatus', function(req, res){
	var username = req.body.username;
	pg.client.query('SELECT * FROM userstatus WHERE username = \'' + username + '\';', [], function(err, result){
		res.json(result.rows);
		//console.log(result.rows);
		return res.end();
	});
});

router.post('/getAllUsers', function(req, res){
	pg.client.query('SELECT * FROM userstatus', [], function(err, result){
		res.json(result.rows);
		return res.end();
	});
});

// router.post('/updateLoggedInUser', function(req, res){
// 	var username = req.body.username; 
// 	var admin = req.body.admin; 
// 	console.log(username);
// 	console.log(admin);
// 	// pg.client.query('UPDATE loggedinuser SET username = \'' + username + '\', SET admin = ' + admin + ' WHERE id = 1', [], function(err, result){
// 	// 	return res.end();
// 	// });
// 	pg.client.query('UPDATE loggedinuser SET username = \'' + username + '\', admin = ' + admin + ' WHERE id = 1', [], function(err, result){
// 		return res.end();
// 	});
// });

// router.post('/getLoggedInUser', function(req, res){
// 	pg.client.query('SELECT * FROM loggedinuser WHERE id = 1', [], function(err, result){
// 		res.json(result.rows[0]);
// 		return res.end();
// 	})
// })



router.post('/updateQuizStatus', function(req, res){
	console.log('hello');
	var quiz = req.body.category;
	var username = req.body.username; 
	pg.client.query('UPDATE userstatus set ' + quiz + ' = true WHERE username = \'' + username + '\';', [], function(err, result){
		return res.end();
	});
});

module.exports = router;
