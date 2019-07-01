const path = require("path");

// import .env variables
require("dotenv-safe").load({
  path: path.join(__dirname, "./.env"),
  sample: path.join(__dirname, "./.env.example")
});

var enableAuthorization = (process.env.ENABLE_AUTHORIZATION === 'true');
var enableBodyParser = (process.env.ENABLE_BODY_PARSER === 'true');

module.exports = {
    enableAuthorization: enableAuthorization,
    enableBodyParser: enableBodyParser
};