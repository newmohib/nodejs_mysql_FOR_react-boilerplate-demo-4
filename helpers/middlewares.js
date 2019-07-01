var config = require('../config');

// function myMiddleWareAndAllParser(req,res,next){
//     if(req.headers.token === 'tk' ||
//      req.url === '/') return next();

//     return res.send("You are not authorized to cal this api!!!");
// }
// app.use(myMiddleWareAndAllParser);


function isAuthorize(req,res,next){
    // if(!config.enableAuthorization){
    //     return next();
    // }

    if(req.query.token === 'tk'|| req.headers.token === 'tk'){
         return next()
        }else{
            return res.send("UnAuthorizedi!!!");
        }
}

//exports.myMiddleWar = myMiddleWareAndAllParser;
exports.isAuthorize =  isAuthorize;