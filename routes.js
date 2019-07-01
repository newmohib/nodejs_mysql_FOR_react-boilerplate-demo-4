var express = require('express');
var cors = require('cors')
 
var router = express.Router();
router.use(cors())
var helloMiddlewares = require('./helpers/middlewares');
var loginController = require('./controllers/loginController');
var campaignController = require('./controllers/campaignController');

//Home
router.post('/campaign',helloMiddlewares.isAuthorize, campaignController.createCampaign);

//login
router.post('/login', loginController.login);

module.exports = router;



