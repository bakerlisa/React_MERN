const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be 3 characters long"]
    },
    company: {
        type: String,
        required: [true, "Company is required"],
        minLength: [5, "Company must be 5 characters long"]
    },
    salary: {
        type: Number,
        min: [70000, "Don't sell yourself too short"]
    },
    remote: {
        type: Boolean,
        required: true
    },
    color: {
        type: String,
        default: "lightpink"
    },
    numJobs: {
        type: Number,
        required: [true, "Number of Jobs is required"],
        min: [1],
        default: 1
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
},
{timestamps:true});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;