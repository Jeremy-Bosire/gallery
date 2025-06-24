require('dotenv').config();

var config = {}

// Update to have your correct username and password
config.mongoURI = 
{
    production: process.env.MONGO_URI,
    development: process.env.MONGO_DEV_URI,
    test: process.env.MONGO_TEST_URI,
}
module.exports = config;
