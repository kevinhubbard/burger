var orm = require('../config/orm.js');

//will have to update to make export successful
var burger = {

//select everything from burgers where its devoured state is false
//need to be updated for user input
orm.selectAll('burgers', 'devoured', 'false');


//inserting a test burger into the database
orm.insertOne('this is a test burger', 'false');


//this is called if burger is devoured 
orm.update('true');
};

module.exports = burger;
