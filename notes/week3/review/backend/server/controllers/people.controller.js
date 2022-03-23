const People = require('../models/people.model');

module.exports.findAllPeoples = (req, res) => {
    People.find()
        .then(allDaPeoples => res.json({ Peoples: allDaPeoples }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding all the People', error: err }));
}

module.exports.findOneSinglePeople = (req, res) => {
    People.findOne({ _id: req.params.id })
        .then(oneSinglePeople => res.json({ People: oneSinglePeople }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding a single Person', error: err }));
}

module.exports.createNewPeople = (req, res) => {
    People.create(req.body)
        .then(newlyCreatedPeople => res.json({ People: newlyCreatedPeople }))
        .catch(err => res.status(400).json({ message: 'Something went wrong creating new People', error: err }));
}

module.exports.updateExistingPeople = (req, res) => {
    People.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPeople => res.json({ People: updatedPeople }))
        .catch(err => res.status(400).json({ message: 'Something went wrong updating People', error: err }));
}

module.exports.deleteAnExistingPeople = (req, res) => {
    People.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: 'Something went wrong deleting People', error: err }));
}