const Cat = require('../models/car.model');

module.exports.findAllCats = (req, res) => {
    Cat.find()
        .then(allDaCats => res.json({ users: allDaCats }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}