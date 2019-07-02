var mysql = require('mysql');


//database
 const databaseConnect = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "users",
    user: "root",
    password: "123456"
});


exports.databaseConnect =  databaseConnect;