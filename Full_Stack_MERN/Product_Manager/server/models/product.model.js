const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({

    title:String
    ,

    price:Number
    ,


    description:String
 
    

},

{timestamps:true}


);

const products = mongoose.model("products", ProductSchema)

module.exports =  products ;