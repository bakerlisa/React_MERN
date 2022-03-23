const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "Title must be 3 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Company must be 3 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email required, please check the formatting"]
    },
    phone: {
        type: Number,
        required: true,
        min: [10, "Phone number required, input your 10 digit number"]
    },
    remote:{
        type: Boolean, 
        required: true,
        default: true
    },
    jobs:{
        type:Array
    }
},
{timestamps:true});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;