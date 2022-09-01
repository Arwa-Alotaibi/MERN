const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "name is required"

        ],
        minlength: [3, "Name must be at least 3 characters"],

    },
    
},{timestamps: true}


);

const Authors = mongoose.model("Authors", AuthorSchema)

module.exports =  Authors ;


