var mysql = require("mysql")
var connection = mysql.createConnection({
    host: "127.0.0.1",

    PORT: 3306,

    user: "root",

    password: "Burbank!123",

    database: "burger"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to db");
    
})

module.exports= connection;