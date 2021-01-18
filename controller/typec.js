const producttype  = require('../models/producttype')
const product = require('../models/product')
const Comment = require('../models/comment')
const likes = require('../models/likes')

const index = (req,res) =>{
    producttype.find().then(response => {
        res.json({
            response
            })
    })
    .catch(err => {
        res.json({
            message : "error .."
        })
    })
}

const savetype = (req, res) => {
    let types = new producttype({
        type : req.body.type
    })
    types.save().then(types => {
        res.json({
            message :"Type added successfully"
        })
    })
    .catch(error => {
        res.json({
            message : "aww Somthing went wrong"
        })
    })
}

const saveproduct = async (req, res) => {
    const data = await producttype.findOne({ type : req.body.product_type });
    if(data === null){
        res.json({
            message : "Product Type not found."
        })
    }
    else{
        
    const products = new product();
    
    products.name = req.body.name;
    products.desc = req.body.desc;
    products.price = req.body.price;
    products.product_type = data._id;
    products.likes = 0;

    await products.save().then(products=>{
        res.json({
            message : "Product added Successsfully"
        })
    })
    .catch(error => {
        res.json({
            message : "aww Somthing went wrong"
        })
    })
}

}

const getproduct = (req, res) => {
    product.find().then(response => {
        res.json({
            response
            })
    })
    .catch(err => {
        res.json({
            message : "could not found products"
        })
    })
}

const updateproduct = (req, res) => {
    let productID = req.body.productID

    let uproduct = {
        name : req.body.name,
        desc : req.body.desc,
        price : req.body.price
    }
    product.findByIdAndUpdate(productID,{$set : uproduct},() => {

    })
    .then(() =>{
        res.json({
            message :"product updated succsessfully"
        })
    })
    .catch(error =>{
        res.json({
            message : "error occured" 
        })
    })
}


const deleteproduct = (req, res) =>{
    let productID = req.body.productID
    product.findByIdAndRemove(productID)
    .then(() =>{
        res.json({
            message :"product deleted succsessfully"
        })
    })
    .catch(error =>{
        res.json({
            message : "error occured" 
        })
    })

}

const mostrecent = async (req, res) =>{
    const data  = await product.find({}).sort({_id : -1}).limit(3)
    res.json({
        Output : data
    })
}

const comments = async (req, res) =>{
    const products = await product.findOne({_id : req.params.productID})
    
    const comment = new Comment();

    comment.content = req.body.content
    comment.product = products._id
    await comment.save()
    // await products.save()
    .then(() =>{
        res.json({
            message :"You Commented"
        })
    })
    .catch(error =>{
        res.json({
            message : "error occured" 
        })
    })
}
const like = async (req, res) =>{
    // console.log(req.body.productID + " " +  req.body.customer_id)        
    const check = await likes.findOne({ $and: [{ product_id: req.body.productID }, { customer_id: req.body.customer_id }]});
    if(check === null){
        const products = await product.findByIdAndUpdate({_id : req.body.productID},{ $inc : {likes : 1}})
     const like_product = new likes();

        like_product.product_id = req.body.productID;
        like_product.customer_id = req.body.customer_id;
        await like_product.save()
        // await products.save()
        .then(() =>{
            res.json({
                message :"You Liked this post"
            })
        })
        .catch(error =>{
            res.json({
                message : "error occured" 
            })
        })
    }
    else{
        res.json({
            message :"You Already Liked on this post"
        })
    }
}
// const getproductbytype = async (req,res) =>{
//     // const bytype = await producttype.find({"_id" : req.params.typeID}).populate("products")
//     // res.json(bytype)
//     const ptypes = await producttype.findOne({_id : req.params.typeID})
    
//     const products = new product();

//     // comment.content = req.body.content
//     products.type = req.body.type
//     products.producttype = ptypes._id
//     // ptypes.product = ptypes._id
//     // products.type = types.__id;
//     await products.save()
//     // await products.save()
//     .then(() =>{
//         res.json({
//             message :"type saved"
//         })
//     })
//     .catch(error =>{
//         res.json({
//             message : "error occured" 
//         })
//     })    
// }

const bytype = async (req,res) =>{
    console.log(req.params.id)
    await product.find({product_type:req.params.id})
    .then(result =>{
        res.status(200).json({
            data : result
        })

    })
    .catch(error=>{
        res.status(404).json({
            message : "Could not found products"
        })
    })

    // const data  = await product.findById({product_type:Object("6001259eadb9128e8428e8ea")})
    // res.json({
    //     Output : data
    // })
 }

 const mostLike = async (req, res) =>{
    const data  = await product.find({}).sort({likes : -1}).limit(10)
    res.json({
        Output : data
    })
}
module.exports = {index,savetype,saveproduct,getproduct,updateproduct,deleteproduct,mostrecent,comments,bytype,like,mostLike};  