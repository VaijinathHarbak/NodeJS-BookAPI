// ////
var sql = require('mssql')
var config = require('../app.config.js');
// connect to your SQL database
var request;

var bookRepository = {
    getBooks: function(id) {
        return new Promise((resolve, reject) => {
            sql.connect(config.DB.SqlDb, function (err){
                if (err) {
                    console.log('ERROR : ' + err);
                    return reject(err)
                }
                else
                {
                    request = new sql.Request();
                    var q = id == null || id == undefined ? 'select * from Book' : ('select * from Book where id = ' + id);
                    request.query(q, function (err, books) {
                            if (err){  
                                sql.close()
                                console.log('ERROR : Error in getBooks() of Repository : ' + err);
                                return reject(err);
                            }
                            else{
                                // send records as a response
                                sql.close()
                                return resolve(books);
                            }
                    });
                }
            });
        });    
    },
    addBook: function(newBook){
        return new Promise((resolve, reject) => {
            sql.connect(config.DB.SqlDb, function (err){
                if (err) {
                    console.log('ERROR : ' + err);
                    return reject(err)
                }
                else
                {
                    request = new sql.Request();
                    var q = "insert into Book (Title, Author, Genre) values ('"+ newBook.Title.trim() +"','"+ newBook.Author.trim() +"','"+ newBook.Genre.trim() +"')";
                    request.query(q, function (err, books) {
                            if (err){  
                                sql.close()
                                console.log('ERROR : Error in getBooks() of Repository : ' + err);
                                return reject(err);
                            }
                            else{
                                // send records as a response
                                sql.close()
                                return resolve(books);
                            }
                    });
                }
            });
        }); 
    },
    editBook: function(){
        
    },
    deleteBook: function(){
        
    }       
};
module.exports = bookRepository;