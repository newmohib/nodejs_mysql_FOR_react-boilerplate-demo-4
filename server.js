var express = require('express');
var helloMiddlewares  =require('./helpers/middlewares');
var app = express();
var port = 4000;
var bodyParser = require('body-parser');
var helloRouter = require('./routes');
var config = require('./config');

if(config.enableBodyParser){
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
}

// app.use(helloMiddlewares.myMiddleWar);
app.use(helloRouter);


app.listen(port,function(e){
    console.log('Server running at port',port);
});
