var database = require('../helpers/database');
var jwt = require('jsonwebtoken');


//create token

function generateToken(req) {
  return jwt.sign({
    auth: 'magic',
    agent: req.headers['user-agent'],
    exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 // Note: in seconds!
  }, secret);  // secret is defined in the environment variable JWT_SECRET
}

//get token

// function validate(req, res) {
//   var token = req.headers.authorization;
//   try {
//     var decoded = jwt.verify(token, secret);
//   } catch (e) {
//     return authFail(res);
//   }
//   if (!decoded || decoded.auth !== 'magic') {
//     return authFail(res);
//   } else {
//     return privado(res, token);
//   }
// }


exports.token = function (req, res, next) {
  console.log('request', req.body);
  let userList = { userdata: { username: 'mohib', password: '123456' } }
  let _username = userList.userdata.username;
  let _password = userList.userdata.password;;
  let username = req.body.username;
  let password = req.body.password;
  let objData = { username: username, password: password };
  let errorData = { error: "Your username or Passwrd is wrong" }

  // database.databaseConnect.connect(function (err) {
  //     if (err) console.log(err);
  //     console.log("Connected!");
  // });

  
  const secret = "create_a_token";

  const createToken = jwt.sign({
    auth: objData,
    agent: req.headers['user-agent'],
    exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 // Note: in seconds!
  }, secret);

  console.log("token", createToken);

  const decodeToken =()=>{
    var getToken = createToken;
    var decoded = jwt.verify(getToken, secret);
    var auth=decoded.auth;
    return decoded;
  }

  console.log("decodeToken",decodeToken())



  // user
  if (username === _username && password === _password) {
    res.send(objData);
  } else {
    res.send(errorData);
  }

};