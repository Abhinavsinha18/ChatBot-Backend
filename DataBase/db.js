const mongoose = require('mongoose');


const connect  =  mongoose.connect(`mongodb+srv://abhinav:abhinav@cluster0.htzhmme.mongodb.net/chatgpt?retryWrites=true&w=majority`)


module.exports = connect;