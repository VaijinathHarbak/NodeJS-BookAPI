'use strict'
var bookManager = require('../datamanager/bookManager.js');

exports.getBooks = function(req, res){
    bookManager.getBooks()
        .then(data=> {res.json(data);})
        .catch(err=> {res.json({ERROR:''+ err});});
};
exports.addBook = function(req, res){
    var newBook = req.body
    bookManager.addBook(newBook)
        .then(data=> {res.json(data);})
        .catch(err=> {res.json({ERROR:''+ err});});
};	