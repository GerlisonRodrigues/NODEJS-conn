const mongoose = require('mongoose');

mongoose.connect('mongobd://localhost/nodebd', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;