var express = require('express');
var bookManager = require('../dataManager/bookManager.js');
var userController = require('../controllers/userController.js');
var bookController = require('../controllers/bookController.js');

var routes = function(){
    
    var bookRouter = express.Router();
    //API to get all books or a single book
    //Parameter id is optional  
    //URL: http://localhost:8000/api/books
    bookRouter.route('/:id?')
    .get(userController.loginRequired,bookController.getBooks)

    //API to add a book 
    //URL: http://localhost:8000/api/books/addbook
    bookRouter.route('/addbook')
        .post(userController.loginRequired,bookController.addBook);	
    return bookRouter;
};

module.exports = routes;