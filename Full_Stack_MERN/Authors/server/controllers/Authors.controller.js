
const Authors = require("../models/Authors.model");


// create a new Author
module.exports.createauthor=(req,res)=>{
    const{name} = req.body;
    Authors.create({name})
    .then(createauthor => res.json({author :createauthor}))
    .catch(err => response.status(400).json(err))

}


// retrive All author
module.exports.GetAllAuthor=(req,res)=>{
    Authors.find({}).sort({ name: 1 })
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// show a particular author
module.exports.GetAuthor=(req,res)=>{
    Authors.findOne({_id:req.params.idd})
    .then(author => res.json( author ))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// edit 
module.exports.UpdateAuthor=(req,res)=>{
    Authors.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(UpdateProduct => res.json({ author: UpdateProduct }))
    .catch(err => response.status(400).json(err))
}

// delete author
module.exports.DeleteAuthor=(req,res)=>{
    Authors.deleteOne({ _id: req.params.id })
    .then(deleteauthor => res.json(deleteauthor))
    .catch(err => res.json(err))
}