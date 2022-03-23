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

module.exports.deleteProduct = (req,res) => {
    Product.deleteMany({_id: req.params.id})
    .then(result => res.json({ result: result}))
    .catch(err => res.json({ message: 'Something went wrong when deleting product', error: err }));
}

module.exports.singleProduct = (req,res) => {
    Product.findOne({_id: req.params.id})
    .then(singleProductInfo => res.json({ product: singleProductInfo}))
    .catch(err => res.json({ message: 'Something went wrong when getting single product', error: err }));
}

module.exports.editProduct = (req,res) => {
    Product.findOneAndUpdate({_id: RegExp.body.id},
        req.body,
        { new: true, runValidators: true })
    .then(updateProduct=> res.json({ updatedProduct: updateProduct}))
    .catch(err => res.json({ message: 'Something went wrong when getting single product', error: err }));
}