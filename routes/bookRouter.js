var express = require('express');
var bookManager = require('../dataManager/bookManager.js');

var routes = function(){
    
    var bookRouter = express.Router();
    //API to get all books or a single book
    //Parameter id is optional  
    //URL: http://localhost:8000/api/books
    bookRouter.route('/:id?')
        .get(function(req, res){
            bookManager.getBooks(req.params.id)
                .then(data=> {res.json(data);})
                .catch(err=> {res.json({ERROR:''+ err});});
        })
    //API to add a book 
    //URL: http://localhost:8000/api/books/addbook
    bookRouter.route('/addbook')
        .post(function(req, res){
            var newBook = req.body
            bookManager.addBook(newBook)
                .then(data=> {res.json(data);})
                .catch(err=> {res.json({ERROR:''+ err});});
        });	
    return bookRouter;
};

module.exports = routes;