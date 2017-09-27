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
            bookRepository.addBook(newBook)
                .then(data => {
                    return resolve(data);
                })// Resolve (or fulfill) the promise with data
                .catch(err => {return reject(err);}); // Reject the Promise with an error
        });
    },
    editBook: function(id){
        
    },
    deleteBook: function(){
        
    }       
};
module.exports = bookManager;