var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); //Body-Parser should be before express.router
var port = process.env.PORT || 8000;

//Default Route : if someone hit the base url then it should respond.
app.get('/',function(req,res){
	res.send('Welcome to my node API');
});

var bookRouter = require('./routes/bookRouter.js')();
app.use('/api/books', bookRouter);

//app.use(express.bodyParser());
app.listen(port, function(){
	console.log('Running on port: ' + port);
});