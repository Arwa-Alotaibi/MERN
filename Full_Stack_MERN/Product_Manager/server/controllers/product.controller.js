const products = require("../models/product.model");



//create a new product 
module.exports.CreateProduct = (req,res)=>{
    const{title, price , description} =req.body;
    products.create({title, price , description})
        .then(Createproducts => res.json({productt :Createproducts}))
        .catch(err => res.json(err));
}


//retrive All Product
module.exports.GetAllProduct = (req,res)=>{
    products.find({})
    .then(allproduct => res.json(allproduct))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));

}


// show a particular product
module.exports.GetProduct=(req,res)=>{
    products.findOne({_id:req.params.idd})
    .then(OneProductt => res.json( OneProductt ))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// edit 
module.exports.UpdateProduct=(req,res)=>{
    products.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(UpdateProduct => response.json(UpdateProduct))

    .then(UpdateProduct => res.json({ productt: UpdateProduct }))

    .catch(err => res.json(err))



}


module.exports.DeleteProduct=(req,res)=>{
    products.deleteOne({ _id: req.params.id })
    .then(DeleteProduct => res.json(DeleteProduct))
    .catch(err => res.json(err))
}