var database = require('../helpers/database');

// exports.login = function(req,res, next){
//     console.log('request',req.body);

//     let userList={userdata:{username:'mohib',password:'123456'}}

//     let _username = userList.userdata.username;
//     let _password = userList.userdata.password;;

//     let username = req.body.username;
//     let password = req.body.password;
//     let objData={username:username,password:password};
//     let errorData={error:"Your username or Passwrd is wrong"}

//     if (username===_username && password ===_password) {
//         res.send(objData);
//     }else{
//         res.send(errorData);
//     }

// };



exports.login = function (req, res, next) {
    console.log('request',req.body);
    let userList = { userdata: { username: 'mohib', password: '123456' } }
    let _username = userList.userdata.username;
    let _password = userList.userdata.password;;
    let username = req.body.username;
    let password = req.body.password;
    let objData = { username: username, password: password };
    let errorData = { error: "Your username or Passwrd is wrong" }


    //database
    // var con = mysql.createConnection({
    //     host: "localhost",
    //     port: "3306",
    //     database: "users",
    //     user: "root",
    //     password: "123456"
    // });

    //database connected

    database.databaseConnect.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected!");
    });

    //database create

    // con.query("CREATE DATABASE users", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created", result);
    // });


    //create table with field

    // var sql = "CREATE TABLE user (id  INT(10) PRIMARY KEY AUTO_INCREMENT NOT NULL , userDetailsId INT(10), username VARCHAR(255), password VARCHAR(255))";

    //create table with primary key
    // var sql = "CREATE TABLE employee2 (id INT PRIMARY KEY, name VARCHAR(255), age INT(3), city VARCHAR(255))";

    //create new column in existing table

    // var sql = "ALTER TABLE employee2 ADD COLUMN salary INT(10)";

    //insert data into table

    // var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'Ajeet Kumar', '27', 'Allahabad')"; 

   //  var sql = "INSERT INTO employees ( name, age, city) VALUES ( 'Ajeet Kumar', '27', 'Allahabad')"; 


//    var sql = "CREATE TABLE userDetails (id  INT(10) PRIMARY KEY AUTO_INCREMENT NOT NULL , username VARCHAR(255), password VARCHAR(255), firstName VARCHAR(255),lastName VARCHAR(255), email VARCHAR(255),phone VARCHAR(15),gender VARCHAR(10), birthDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, updateData timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP )";




//    database.databaseConnect.query(sql, function (err, result) {
//         if (err) console.log(err);
//         console.log("Table created", result);
//     });




    //insert multiple value

    // var sql = "INSERT INTO employees (id, name, age, city) VALUES ?";
    // var values = [
    //     ['3', 'Bharat Kumar', '25', 'Mumbai'],
    //     ['4', 'John Cena', '35', 'Las Vegas'],
    //     ['5', 'Ryan Cook', '15', 'CA']
    // ];




    // var sql = "INSERT INTO user ( username, password) VALUES ?";
    // var values = [
    //     [ username,password ]
    // ];

    // database.databaseConnect.query(sql,[values], function (err, result) {
    //     if (err) console.log(err);
    //     console.log("Table created", result);
    // });



    // user
    if (username === _username && password === _password) {
        res.send(objData);
    } else {
        res.send(errorData);
    }

};