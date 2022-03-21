import mongoose = require("mongoose");

const SundeasSchema = new mongoose.Schema({
    flavor: String,
    numScoops: Number,
    whipped: Boolean,
    name: String,
    toppings: [String]
})

const Sundea = Mongoose.model("Sundea",SundeasSchema);

module.exports = Sundea;