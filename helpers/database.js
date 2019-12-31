var mysql = require('mysql');


let databaseConnectiton={}
//database
  databaseConnectiton.localConnect = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "users",
    user: "root",
    password: "123456"
});

databaseConnectiton.remortConnect = mysql.createConnection({
    host: "",
    port: "3306",
    database: "test",
    user: "admin",
    password: "admin123"
});

 
 module.exports =  databaseConnectiton;