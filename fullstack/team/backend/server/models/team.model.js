const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name needs to be at least 3 characters"]
    },
    position: {
        type:String, 
        minlength: [3, "Position needs to be at least 3 characters"],
        required: [true, "Position is required"]
    },
    game1: {
        type: String,
        default: "undecided"
    },
    game2: {
        type: String,
        default: "undecided"
    },
    game3: {
        type: String,
        default: "undecided"
    }
},{timestamps:true});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;