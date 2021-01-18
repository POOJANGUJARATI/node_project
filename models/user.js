const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userschema = new Schema({
     name : {
          type : String,
          required : true,
          trim : true
     },
     email : {
          type : String,
          required : true,
          unique : true

     },
     password : {
          type : String,
          required : true

     },
     phone :{
          type : String,
          required : true,
          unique : true

     }

},{timestamp: true})

const User = mongoose.model('User',userschema)
module.exports = User