var express = require('express');
var mongoose = require('mongoose');
var sql = require('mssql')
var config = require('./app.config.js');
//var Book = require('./models/bookModel');
var bookManager = require('./dataManager/bookManager.js');

//var db = mongoose.Connection('mongodb://localhost/BookAPI');
var app = express();
var port = process.env.PORT || 8000;

//API to get all books or a single book
//Parameter id is optional  
//URL: http://localhost:8000/api/books
var bookRouter = express.Router();
bookRouter.route('/books/:id?')
	.get(function(req, res){
		bookManager.getBooks(req.params.id)
			.then(data=> {res.json(data);})
			.catch(err=> {res.json({ERROR:''+ err});});
	});
app.use('/api', bookRouter);

//Default Route : if someone hit the base url then it should respond.
app.get('/',function(req,res){
	res.send('Welcome to my node API');
});

app.listen(port, function(){
	console.log('Running on port: ' + port);
});