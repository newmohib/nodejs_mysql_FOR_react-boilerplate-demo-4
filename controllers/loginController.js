var database = require('../helpers/database');
var config = require('../config');
var jwt = require('jsonwebtoken');

const secret = config.secretKeyAuthorization;





exports.login = function (req, res, next) {
    console.log('request', req.body);
    let userList = { userdata: { username: 'mohib', password: '123456' } }
    let _username = userList.userdata.username;
    let _password = userList.userdata.password;;
    var username = req.body.username;
    let password = req.body.password;
    let objData = { username: username, password: password };
    let errorData = { error: "Your username or Passwrd is wrong" }




    database.databaseConnect.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected!");
    });

    console.log(username,password);
//username
//var username='tanvir';
    //var sql = `SELECT * FROM   user WHERE username=${ username }`; 
    //var sql = `SELECT * FROM   user WHERE username="mohib"`; 
    //var sql = `SELECT * FROM   user WHERE id="1"`;

    // username: 'mohib'
    var usern= "2";
   var sql = `SELECT * FROM user WHERE username='${username}'`;
    // var sql = `SELECT * FROM user WHERE password=${password}`;
    console.log('query',sql);

    database.databaseConnect.query(sql, function (err, result) {
        if (err) console.log(err);
        console.log( username ,"RowDataPacket", result);
    });

    // user
    if (username === _username && password === _password) {

        const createToken = jwt.sign({
            auth: objData,
            agent: req.headers['user-agent'],
            exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 // Note: in seconds!
        }, secret);
        console.log("token", createToken);
        console.log("time", Math.floor(new Date().getTime()) + 7 * 24 * 60 * 60);

        res.send({ ...objData, isAuthorization: createToken });
    } else {
        res.send(errorData);
    }

};