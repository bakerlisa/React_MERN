const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    name: String,
    type: String,
    gender: String,
    age: Number
});

const Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;