var config = require('../config');
var jwt = require('jsonwebtoken');

// function myMiddleWareAndAllParser(req,res,next){
//     if(req.headers.token === 'tk' ||
//      req.url === '/') return next();

//     return res.send("You are not authorized to cal this api!!!");
// }
// app.use(myMiddleWareAndAllParser);


function isAuthorize(req, res, next) {
    // if(!config.enableAuthorization){
    //     return next();
    // }

    if (req.query.token === 'tk' || req.headers.token === 'tk') {
        return next()
    } else {
        return res.send("UnAuthorizedi!!!");
    }
}


function authorizeWithToken(req, res, next) {
    let getToken = null;
    let secret = null;
    let decodedToken = null;
    let auth = null;
    if (config.secretKeyAuthorization) {
        console.log("config.secretKeyAuthorization");
        getToken = req.headers.token || req.query.token;
        secret = config.secretKeyAuthorization;
    }
    if (getToken && secret) {
        console.log("getToken && secret");
        decodedToken = jwt.verify(getToken, secret);
        auth = decodedToken.auth;
    }
    if (auth) {
        console.log("authorized");
        return next()
    }else{
        console.log("unauthorizedi");
        return res.send("UnAuthorizedi!!!");
    }
}
//exports.myMiddleWar = myMiddleWareAndAllParser;
exports.isAuthorize = isAuthorize;
exports.authorizeWithToken = authorizeWithToken;