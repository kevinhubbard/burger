var orm = require('../config/orm.js');

//will have to update to make export successful
var burger = {

//select everything from burgers where its devoured state is false
//need to be updated for user input
all: function(callback){
	orm.selectAll("burgers", function(res){
		callback(res);
	});

},


//inserting a test burger into the database
create: function(name, callback){
	orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], callback);
},


//this is called if burger is devoured 
update: function(id, callback){
	var state = "id=" + id;
	orm.update('burgers', {devoured: true}, state, callback);
}
};

module.exports = burger;
