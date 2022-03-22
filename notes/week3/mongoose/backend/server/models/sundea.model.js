import mongoose = require("mongoose");

const SundeasSchema = new mongoose.Schema({
    flavor: {
        type: String,
        requires: [true, "You need an ice cream flavor"]
    },
    numScoops: Number,
    whipped: Boolean,
    name: String,
    toppings: [String]
},{timestamps:true})

const Sundea = Mongoose.model("Sundea",SundeasSchema);

module.exports = Sundea;