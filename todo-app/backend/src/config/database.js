const mongoose = require('mongoose');
mongoose.Promise = global.Promise;//remove warning message
module.exports =  mongoose.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });