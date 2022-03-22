const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allDaProducts => res.json({ products: allDaProducts }))
        .catch(err => res.json({ message: 'Something went wrong finding all products', error: err }));
}

module.exports.createNewProduct = (req,res) => {
    Product.create(req.body)
    .then(newProduct => res.json({ createdNewProduct: newProduct }))
    .catch(err => res.json({ message: 'Something went wrong creating new product', error: err }));
}