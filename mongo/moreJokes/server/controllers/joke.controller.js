const Joke = require('../models/joke.model');



// FIND
module.exports.getAllJokes = (req,res) => {
    console.log(res.collection.count());
    
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getSingleJoke = (req,res) =>{
    Joke.findOne({ _id: req.params.id })
    .then(singleJoke => res.json({ oneJoke: singleJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// jokes is an array of objects
// jokes.length
// Math.Floor(Math.random * jokes.length)
// give back the jokes[random] = response

// ?? instead of find, get by the idexarray
// ?? where do we put the data


module.exports.randomJoke = (req,res) => {
    Joke.find()
        .then(randomJokes => res.json({ random: randomJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}








// CREATE
module.exports.addJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({ message: 'Couldn\'t add new joke ', error: err }));
}

// PUT
module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, 
    req.body,
    { new: true, runValidators: true })
        .then(updatedJoke => res.json({ jokeUpdated: updatedJoke }))
        .catch(err => res.json({ message: 'Couldn\'t update joke ', error: err }));
}

// DELETE
module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Couldn\'t delete joke ', error: err }));
}