const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productTypechema = new Schema({
     type : {
          type : String,
          required : true,
          trim : true,
          unique : true
     },
     product_type : [{
          type : mongoose.Schema.Types.ObjectId,
          ref : "products"
     }]
})

const Product_type = mongoose.model('Product_type',productTypechema)
module.exports = Product_type;