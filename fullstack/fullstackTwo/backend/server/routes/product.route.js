const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.singleProduct);
    app.post('/api/create/product', ProductController.createNewProduct);
    app.delete('/api/delete/product/:id', ProductController.deleteProduct);
}