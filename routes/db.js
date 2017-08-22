const pg = require('pg');
	//connects to a local databse nameD STS 
	const connectionString = process.env.DATABASE_URL; 

	var client = new  pg.Client(connectionString);

	client.connect();

	// client.query('CREATE TABLE IF NOT EXISTS users(username VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL);', [], function(err, result){
	// 	if(err){
	// 		console.log(err);
	// 	}
	// });

	// client.query('CREATE TABLE IF NOT EXISTS sampleQuiz(id SERIAL, content VARCHAR(300) NOT NULL, answerChoices TEXT [] NOT NULL, answer VARCHAR(5));', [], function(err, result){
	// 	if(err){
	// 		console.log(err);
	// 	}
	// });

	// client.query('CREATE TABLE IF NOT EXISTS userStatus(username VARCHAR(50) NOT NULL, quiz1 BOOLEAN NOT NULL);', [], function(err, result){
	// 	if(err){
	// 		console.log(err);
	// 	}
	// });

exports.client = client; 