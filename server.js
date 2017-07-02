//setting up our dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

//set up express
var app = express();
var port = process.env.PORT || 1337;

//serve static content
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

//method override for express
app.use(methodOverride("_method"));

//use express as our view engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

//routes for our app
app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);

//start server
app.listen(port, function(){
	console.log('Listening on port ' + port);
});



