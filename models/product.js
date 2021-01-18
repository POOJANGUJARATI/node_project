const mongoose = require('mongoose');
const Schema = mongoose.Schema

let namelengthcheck = (name) => {
    if (!name) {
      return false; 
    } else {
      if (name.length < 5 || name.length > 50) {
        return false; 
      } else {
        return true; 
      }
    }
  };
  
  let desclengthcheck = (desc) => {
    if (!desc) {
      return false; 
    } else {
      if (desc.length < 5 || desc.length > 500) {
        return false; 
      } else {
        return true; 
      }
    }
  };
  

const product = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate : namelengthcheck
        
    },
    desc : {
        type: String,
        required: true,
        validate : desclengthcheck,
    },
    price : {
        type: Number,
        required: true
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref :'Comment',
        required: true
    }],
    product_type :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product_type"
    },
    likes:{
        type : Number,
        required: true
    }

})
const products = mongoose.model('products',product)
module.exports = products