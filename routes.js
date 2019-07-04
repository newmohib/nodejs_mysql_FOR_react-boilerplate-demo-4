var express = require('express');
var cors = require('cors')
 
var router = express.Router();
router.use(cors())
var helloMiddlewares = require('./helpers/middlewares');
var loginController = require('./controllers/loginController');
var signupController = require('./controllers/signupController');
var campaignController = require('./controllers/campaignController');
var tokenController = require('./controllers/tokenController');

//Home
router.post('/campaign',helloMiddlewares.isAuthorize, campaignController.createCampaign);

//login
router.post('/login', loginController.login);
router.post('/signup', signupController.signup);
router.post('/token', tokenController.token);

module.exports = router;



