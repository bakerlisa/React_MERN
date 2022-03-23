const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allDaProducts => res.json({ products: allDaProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}