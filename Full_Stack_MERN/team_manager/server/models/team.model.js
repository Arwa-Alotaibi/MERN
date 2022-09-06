const mongoose = require('mongoose');


const TeamSchema = new mongoose.Schema({
    PlayerName:{
        type:String,
        minlength: [2, "Name must be at least 2 characters in Length"],

    },

    PreferredPosition:{
        type:String,

    },

    allGames:['Game']
    
},
{ timestamps: true }

)

module.exports.team = mongoose.model('team', TeamSchema);



