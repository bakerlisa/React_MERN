const Cat = require('../models/cat.model');

module.exports.findAllCats = (req, res) => {
    Cat.find()
        .then(allDaCats => res.json({ cats: allDaCats }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}