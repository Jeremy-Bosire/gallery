var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://jeremy:mbogi26@cluster0.jmdot6v.mongodb.net/gallery_prod?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://jeremy:mbogi26@cluster0.jmdot6v.mongodb.net/gallery_dev?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://jeremy:mbogi26@cluster0.jmdot6v.mongodb.net/gallery_test?retryWrites=true&w=majority&appName=Cluster0',
}
module.exports = config;
