const mongoose = require('mongoose');

const JokeSchema  = new mongoose.Schema({
    setup:{
        type:String,
        minlenght:[10, 'setup must be at least 10 characters long  :) ']
    },


    punchline:{
        type:String,
      minlenght:[3, 'punchline  must be at least 3 characters long :)']
    },


},
{timestamps:true}

);

const joke = mongoose.model("joke", JokeSchema)

module.exports =  joke ;



