//require our database connection
var connection = require('./connection');

function addQuestionMark(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function object(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
	//select all burgers from the burgers_db database
	selectAll: function(tableInput, cb){
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			//do something with our result will display on webpage later
			if(err){
				throw err;
			}
			console.log(result);
			cb(result);
		});
	},
	// insert into burgers database new burger
	insertOne: function(table, colums, values, callback){		
		var queryString = 'INSERT INTO ' + table + ' (';
			queryString += colums.toString();
			queryString += ') VALUES (';
			queryString += addQuestionMark(values.length);
			queryString += ')';

		console.log(queryString);

		connection.query(queryString, values, function (err, result){
			//do something with our result will update webpage later
			if(err){
				throw err;
			}
			console.log(result);
			callback(result);
		});
	},
	//update burger in database
	update: function(table, update, state, callback){
		var queryString = 'UPDATE ' + table;
			queryString += ' SET ';
			queryString += object(update);
			queryString += ' WHERE ';
			queryString += state;

		console.log(queryString);

		connection.query(queryString, function(err, result){
			//update database with burger status
			if(err){
				throw err
			}
			console.log(result);
			callback(result);
		});
	}

};

module.exports = orm;