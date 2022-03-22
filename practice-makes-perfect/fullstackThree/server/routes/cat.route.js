const CatController = require('../controllers/cat.controller');

module.exports = app => {
    app.get('/api/cats', CatController.findAllCats);
}