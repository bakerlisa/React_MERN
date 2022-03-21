const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Joke = mongoose.model('Joke', UserSchema);

module.exports = Joke;
