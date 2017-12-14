var express 	= require('express');
var bodyParser 	= require('body-parser');
var jwt    		= require('jsonwebtoken'); // used to create, sign, and verify tokens
var config 		= require('./app.config.js');
var authenticationManager = require('./dataManager/authenticationManager.js');
var userController = require('./controllers/userController.js');
var app = express();
var apiRoutes = express.Router();
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
var port = process.env.PORT || 8000;

//Default Route : if someone hit the base url then it should respond.
app.get('/',function(req,res){
	res.send('Welcome to my node API');
});

var bookRouter = require('./routes/bookRouter.js')();
app.use('/api/books', bookRouter);

//API authenticating user using token
//URL: http://localhost:8000/api/authenticate
app.post('/api/authenticate',userController.sign_in);

//API to Register a user
//URL: http://localhost:8000/api/register
app.post('/api/register',userController.register);

//app.use(express.bodyParser());
app.listen(port, function(){
	console.log('Running on port: ' + port);
});