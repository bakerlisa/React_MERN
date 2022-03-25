const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name needs to be at least 3 characters"]
    },
    game1: {
        type: String,
        default: "active"
    },
    game2: {
        type: String,
        default: "inactive"
    },
    game3: {
        type: String,
        default: "undecided"
    }
},{timestamps:true});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;