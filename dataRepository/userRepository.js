// ////
var sql = require('mssql')
var config = require('../app.config.js');
// connect to your SQL database
var request;

var userRepository = {
    getUser: function(userName) {
        return new Promise((resolve, reject) => {
            sql.connect(config.DB.SqlDb, function (err){
                if (err) {
                    console.log('ERROR : ' + err);
                    sql.close();
                    return reject(err)
                }
                else
                {
                    request = new sql.Request();
                    var q = "select * from [dbo].[User] where userName = '" + userName + "';";
                    request.query(q, function (err, user) {
                            if (err){  
                                sql.close()
                                console.log('ERROR : Error in getUser() of Repository : ' + err);
                                return reject(err);
                            }
                            else{
                                // send records as a response
                                sql.close()
                                return resolve(user.recordset[0]);
                            }
                    });
                }
            });
        });    
    },

    addUser: function(newUser) {
        return new Promise((resolve, reject) => {
            sql.connect(config.DB.SqlDb, function (err){
                if (err) {
                    console.log('ERROR : ' + err);
                    sql.close();
                    return reject(err)
                }
                else
                {
                    request = new sql.Request();
                    var q = "insert into [dbo].[User] (UserName, Password) values ('"+ newUser.UserName +"','"+ newUser.Password +"');";
                    request.query(q, function (err, data) {
                            if (err){  
                                sql.close()
                                console.log('ERROR : Error in addeser() of Repository : ' + err);
                                return reject(err);
                            }
                            else{
                                // send records as a response
                                sql.close()
                                return resolve(data);
                            }
                    });
                }
            });
        });    
    }
};
module.exports = userRepository;