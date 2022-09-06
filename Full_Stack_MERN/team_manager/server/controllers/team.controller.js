const { team } = require('../models/team.model');


// create player
module.exports.createPlayer=(req,res)=>{
    const{PlayerName , PreferredPosition} = req.body
    team.create({PlayerName , PreferredPosition})

    .then(createperson => response.json({player :createperson}))
    .catch(err => response.json(err));
}





// retrive All player
module.exports.GetAllPlayer=(req,res)=>{
    team.find({}).sort({ name: 1 })
    .then(allPlayer => res.json(allPlayer))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// show a particular player
module.exports.Getplayer=(req,res)=>{
    team.findOne({_id:req.params.idd})
    .then(player => res.json( player ))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// delete player
module.exports.Deleteplayer=(req,res)=>{
    team.deleteOne({ _id: req.params.id })
    .then(deleteauthor => res.json(deleteauthor))
    .catch(err => res.json(err))
}


