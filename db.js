// Using Node.js `require()`
const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://root:root@cluster0.zgska.mongodb.net/mern-games';

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlPArser:true}) 

var connection= mongoose.connection

connection.on('error', ()=>{
    console.log("MongoDB connection failed");
})

connection.on('connected', ()=>{
    console.log("MongoDB connection Successful");
})

module.exports = mongoose