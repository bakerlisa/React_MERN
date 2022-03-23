const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be 3 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Company is required"],
        minLength: [3, "Company must be 3 characters long"]
    },
    email: {
        type: string,
        required: [true, "Please check the formatting"]
    },
    phone: {
        type: Number,
        required: true,
        min: [10, "Input your 10 digit number"]
    },
    remote:{
        type: Boolean, 
        required: true
    }
},
{timestamps:true});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;