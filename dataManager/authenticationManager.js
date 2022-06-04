// ////
var userRepository = require('../dataRepository/userRepository.js')
var authenticationManager = {
    getUser: function(userName) {
        return new Promise((resolve, reject) => {
            if(userName == null || userName == undefined){
                return reject("UserName cannot be empty");
            }
            userRepository.getUser(userName)
                .then(data => {
                    return resolve(data);
                })// Resolve (or fulfill) the promise with data
                .catch(err => {return reject(err);}); // Reject the Promise with an error
        });
    },

    addUser: function(newUser) {
        return new Promise((resolve, reject) => {
            if(newUser == null || newUser == undefined){
                return reject("Please define User");
            }
            else if(newUser.UserName == null || newUser.UserName == undefined){
                return reject("UserName cannot be empty");
            }
            else if(newUser.Password == null || newUser.Password == undefined){
                return reject("Password cannot be empty");
            }
            userRepository.addUser(newUser)
                .then(data => {
                    return resolve(data);
                })// Resolve (or fulfill) the promise with data
                .catch(err => {return reject(err);}); // Reject the Promise with an error
        });
    }
};
module.exports = authenticationManager;