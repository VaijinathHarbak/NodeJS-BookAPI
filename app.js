var express = require('express');
var mongoose = require('mongoose');
var sql = require('mssql')
var config = require('./app.config.js')
var Book = require('./models/bookModel');

var db = mongoose.Connection('mongodb://localhost/BookAPI');
var app = express();
var port = process.env.PORT || 3000;

var bookRouter = express.Router();
bookRouter.route('/books')
	.get(function(req, res){
		// Book.find(function(err, books){
		// 	if(err){
		// 		res.status(500).send(err);
		// 	}
		// 	else{
		// 		res.json(books);
		// 	}
		// });

		// connect to your SQL database
		sql.connect(config.DB.SqlDb, function (err) {
				var request;
				if (err) res.json(err);
				else
				{
					// create Request object
					request = new sql.Request();
				}
				// query to the database and get the records
				request.query('select * from Book', function (err, books) {
					if (err){  
						sql.close()
						res.json(err);
					}
					// send records as a response
					sql.close()
					res.json(books.recordsets);
				});
			});
	});
	
app.use('/api', bookRouter);
//Default Route : if someone hit the base url then it should respond.
app.get('/',function(req,res){
	res.send('Welcome to my node API');
});

app.listen(port, function(){
	console.log('Running on port: ' + port);
});