const Joke = require('../models/joke.model');

// FIND
module.exports.getAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong getting all the jokes', error: err }));
}

module.exports.getSingleJoke = (req,res) =>{
    Joke.findOne({ _id: req.params.id })
    .then(singleJoke => res.json({ oneJoke: singleJoke }))
    .catch(err => res.json({ message: 'Something went wrong getting one joke', error: err }));
}

// RANDOM
module.exports.randomJoke = (req,res) => { 
    Joke.count().exec(function (err, count) {

        var random = Math.floor(Math.random() * count)

        Joke.findOne().skip(random)
        .then(newRandomJoke => res.json({ random:  newRandomJoke }))
        .catch(err => res.json({ message: 'Couldn\'t get a random joke', error: err }));
    })
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
