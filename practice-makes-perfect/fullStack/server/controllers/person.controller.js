const Person = require('../modules/person.model');

module.exports.findAllUsers = (req,res) => {
    Person.find()
    .then(allUsers => res.json({ users: allUsers}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}