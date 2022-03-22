const Dog = require('../models/dog.model');

module.exports.findAllDogs = (req, res) => {
    Dog.find()
        .then(allDaDogs => res.json({ allDogs: allDaDogs }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createDog = (req,res) => {
    Dog.create(req.body)
        .then(newlyCreatedDog => res.json({ dog: newlyCreatedDog }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}