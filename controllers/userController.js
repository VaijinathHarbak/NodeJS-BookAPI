'use strict';
var jwt    		= require('jsonwebtoken'); // used to create, sign, and verify tokens
var config 		= require('../app.config.js');
var authenticationManager = require('../dataManager/authenticationManager.js');

exports.register = function(req, res) {
    var newUser = req.body;
		authenticationManager.addUser(newUser)
		.then(data=> {
      if (data) {
        return res.status(402).send({
          message: "User registered successfully."
        });
      } else {
        return res.json("Error");
      }
    });
	};
exports.sign_in = function(req, res){
	var userName = req.body.userName;
	var password = req.body.password;
	authenticationManager.getUser(userName)
		.then(data=> {
			console.log(password);
			if(data && data['Password'].trim() === password){
				// if user is found and password is right
				const payload = {
					userName: userName,
					password: password
					};
				var token = jwt.sign(payload, config.secret);
					res.json({
						token: token,
						success: true
					});
			}
			else{
				console.log(data['Password']);
				res.status(401).json({message: data['Password']});
			}
			
		})
		.catch(err=> {res.json({ERROR:''+ err});});
	};

exports.loginRequired = function(req, res, next) {
	
	  // check header or url parameters or post parameters for token
	  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['token'];
	
	  // decode token
	  if (token) {
	
		// verifies secret and checks exp
		jwt.verify(token, config.secret, function(err, decoded) {      
		  if (err) {
			return res.json({ success: false, message: 'Failed to authenticate token.' });    
		  } else {
			// if everything is good, save to request for use in other routes
			req.decoded = decoded;    
			next();
		  }
		});
	
	  } else {
	
		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.' 
		});
	
	  }
	};