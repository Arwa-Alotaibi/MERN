
const products = require("../models/product.model");



//create a new product 
module.exports.CreateProduct = (req,res)=>{
    const{title, price , description} =req.body;
    products.create({title, price , description})
        .then(products => res.json(products))
        .catch(err => res.json(err));
}



module.exports.GetAllProduct = (req,res)=>{
    products.find()
    .then(allproduct => res.json({ allproduct }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));

}