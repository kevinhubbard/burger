//require router dependencies and burger models
var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

//get our index route
router.get('/', function(req, res){
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
	//get all burger data from db and display to page
	burger.all(function(burgerData){
		res.render('index', {burger_data: burgerData});
	});
});

//post route to create burger
router.post('/burgers/create', function(req, res){
	//create burger and send to database
	burger.create(req.body.burger_name, function(result){
		console.log(result);
		res.redirect('/');
	});
});


//update burger status
router.put('/burgers/update', function(req, res){
	burger.update(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

module.exports = router;