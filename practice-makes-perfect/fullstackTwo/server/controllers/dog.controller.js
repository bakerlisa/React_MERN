const Dog = require('../models/dog.model');

module.exports.allDogs = (req,res) => {
    Dog.find()
    .then(allCurrentDogs => res.json({currentDogs: allCurrentDogs}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}