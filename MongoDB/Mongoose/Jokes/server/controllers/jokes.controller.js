

const joke = require("../models/jokes.model");

//Export a function to get all jokes
module.exports.GetAlljokes = (req,res)=>{
    joke.find()
    .then(alljokes => res.json({ alljokes }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));

}

//Export a function to get a single joke
module.exports.GetSingleJoke=(req,res)=>{
    joke.findOne()
    .then(singlejoke => res.json({ singlejoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//Export a function to create a joke
module.exports.CreateNewJoke=(req,res)=>{
    joke.create()
    .then(createjoke => res.json({ createjoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//Export a function to update a joke
module.exports.UpdateJoke=(req,res)=>{
    joke.findOneAndUpdate(
        {_id:req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(updatedjoke => res.json({  updatedjoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//Export a function to delete a joke
module.exports.deletejoke=(req,res)=>{
    joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}



//Export a function to random a joke
module.exports.GetRandom=(req,res)=>{
    joke.aggregate([{$sample:{size:1}}])
    .then(jokeRandom => res.json({ jokeRandom }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));

}

