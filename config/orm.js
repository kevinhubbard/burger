//require our database connection
var connection = require('./connection');

var orm = {
	//select all burgers from the burgers_db database
	selectAll: function(tableInput, colToSearch, valOfCol){
		var queryString = 'SELECT * FROM ?? WHERE ?? = ?';
		connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
			//do something with our result will display on webpage later
			console.log(result);
		});
	},
	// insert into burgers database new burger
	insertOne: function(burger, devoured){		
		var queryString = 'INSERT INTO burgers VALUES ? ?';
		connection.query(queryString, [burger, devoured], function (err, result){
			//do something with our result will update webpage later
			console.log(result);
		});
	},
	//update burger in database
	update: function(devoured, bgrName){
		var queryString = 'UPDATE burgers SET devoured = ? WHERE ?';
		connection.query(queryString, [devoured, bgrName], function(err, result){
			//update database with burger status
			console.log(result);
		});
	}

};

module.exports = orm;