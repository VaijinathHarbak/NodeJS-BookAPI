// ////
var bookRepository = require('../dataRepository/bookRepository.js')
var bookManager = {
    getBooks: function(id = null) {
        return new Promise((resolve, reject) => {
            bookRepository.getBooks(id)
                .then(data => {
                    return resolve(data);
                })// Resolve (or fulfill) the promise with data
                .catch(err => {return reject(err);}); // Reject the Promise with an error
        });
    },
    addBook: function(newBook){
        return new Promise((resolve, reject) => {
           debugger;
            if(typeof(newBook) == "undefined" || typeof(newBook.Title) == "undefined" || newBook.Title == ""
                || typeof(newBook.Author) == "undefined" || newBook.Author == ""|| typeof(newBook.Genre) == "undefined" || newBook.Genre == ""){
                    return reject("Book not defined properly");

            }
            else{
                bookRepository.addBook(newBook)
                .then(data => {
                    return resolve(data);
                })// Resolve (or fulfill) the promise with data
                .catch(err => {return reject(err);}); // Reject the Promise with an error
            }
        });
    },
    editBook: function(id){
        
    },
    deleteBook: function(){
        
    }       
};
module.exports = bookManager;