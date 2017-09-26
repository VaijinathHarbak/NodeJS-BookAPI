var mongoose = require('mongoose');
    
var Schema = mongoose.Schema;

////This should be the schema for Book table in your database
var bookModel = new Schema({
    title: {type:String},
    author:{type:String},
    genre:{type:String},
    read:{type:Boolean, default:true},
 });
module.exports = mongoose.model('Book',bookModel);