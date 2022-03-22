const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name: String,
    breed: String,
    gender: String,
    age: Number
});

const Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog;
