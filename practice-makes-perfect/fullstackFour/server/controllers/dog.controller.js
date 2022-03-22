const Dog = require('../models/dog.model');

module.exports.findAllDogs = (req, res) => {
    Dog.find()
        .then(allDaDogs => res.json({ users: allDaDogs }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}