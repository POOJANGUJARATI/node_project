const mongoose = require('mongoose')
const Schema = mongoose.Schema

// let passwordchecker = (password) => {
//      if(password.length >= 8 && password.length <= 25){
//           return true
//      }
//      else{
//           return false
//      }
// };

// let emailcheck = (email) => {
//      // Check if e-mail exists
//      if (!email) {
//        return false; // Return error
//      } else {
//        // Regular expression to test for a valid e-mail
//        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
//        return regExp.test(email); // Return regular expression test results (true or false)
//      }
//    };

const userschema = new Schema({
     name : {
          type : String,
          required : true,
          trim : true
     },
     email : {
          type : String,
          required : true,
          unique : true,
          // validator : emailcheck

     },
     password : {
          type : String,
          required : true,
          // validate : passwordchecker
          
          // minLength: 6,
          // maxLength: 15,
          // minLength: [4, 'Name is too short!'],
          // maxLength: 15

     },
     phone :{
          type : String,
          required : true,
          unique : true

     }

},{timestamp: true})

const User = mongoose.model('User',userschema)
module.exports = User