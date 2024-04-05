var mysql = require('mysql');  
var connection = mysql.createConnection({  
    host: "localhost",
    user: "root",  
    password: "Uscsports1@",
    database: "food_delivery" 
});  
connection.connect(function(err) { 
    if (err) throw err;  
    console.log("Connected!");
    console.log(connection.query("SELECT * from restaurants")) 
});  