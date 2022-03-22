const Person = require('../modules/person.module');

module.exports.findAllUsers = (req,res) => {
    Person.find()
    .then(allUsers => res.json({ users: allUsers}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.newUser = (req,res) => {
    Person.create()
    .then(newPerson => res.json({new: newPerson}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}