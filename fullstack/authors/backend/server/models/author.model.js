const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    author: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name needs to be at least 3 characters"]
    },
    books: {
        type:Number
    },
    gener: {
        type:String
    },
    likes:{
        type: Number
    }
},{timestamps:true});

const Authors = mongoose.model('Authors', AuthorsSchema);

module.exports = Authors;