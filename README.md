# NodeJS-BookAPI
This is a REST api application which demostrate CRUD operation using SQL Server database

#Application Setup
This is a nodeJS application so you need to install NodeJS (Version should be greater than 6.10.1) first. Then follow below steps.
1.  Get the latest repository code
2.  Open node cmd and go to the root level of the project folder where app.js file is located
3.  Run 'npm install' command
4.  Run 'Gulp' command to start the server
5.  you should see message 'Running on port: 3000'

#Possible error
While Application setup you may get "Error: listen EADDRINUSE :::3000". 
This means the port you are using is in use so to resolve this just open gulpFile.js file and change the port over there.

#DataBase Setup
1.  Database scripts are in databaseScript folder, execute those scripts and get your database ready.
2.  Set your database configuration in app.config.js file

