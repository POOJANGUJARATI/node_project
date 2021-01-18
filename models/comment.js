const mongoose = require('mongoose')

const comment_schema = new mongoose.Schema({
    content : {
        type : String,
        required : true        
    },
    product:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'products',
        required : true
    }

})

module.exports = mongoose.model("Comment",comment_schema)