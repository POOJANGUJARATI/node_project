const mongoose = require('mongoose')

const like_schema = new mongoose.Schema({
    product_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true        
    },
    customer_id:{
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }

})

module.exports = mongoose.model("Likes",like_schema)