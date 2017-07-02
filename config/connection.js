//require connection credentials to local database
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'burgers_db'

});

//establishing connection to burgers_db
connection.connect(function(err){
	if (err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id: ' + connection.threadId);
})


module.exports = connection;