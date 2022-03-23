const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, "Title is required"],
        minlength: [3, "Title needs to be at least 3 characters"]
    },
    price: {
        type:Number,
        required: [true, "Product needs a price"],
        minlength: [1, "Product must be at least 1 number long"]
    },
    description: {
        type:String,
        required: [true, "Your product needs a description"],
        minlength: [10, "You must have a minimum of 10 chacters"]
    },
    amount:{
        type:Number,
        required: [true, "Amount needed"],
        minlength: [1, "Minimum of 1"]
    },
    type:{
        type: String,
        required: [true, "Type needed"]
    }
},{timestamps:true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;