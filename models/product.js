const mongoose = require('mongoose');
const Schema = mongoose.Schema

const product = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    desc : {
        type: String,
        required: true
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