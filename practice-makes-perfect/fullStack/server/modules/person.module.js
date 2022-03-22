const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: Date,
    email: String,
    phone: Number
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;