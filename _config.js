require('dotenv').config();

var config = {}

// Update to have your correct username and password
config.mongoURI = process.env.MONGO_URI;
/*{
    production: 'mongodb+srv://jeremy:mbogi26@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}*/
module.exports = config;
