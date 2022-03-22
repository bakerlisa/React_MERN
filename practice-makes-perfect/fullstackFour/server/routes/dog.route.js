const UserController = require('../controllers/dog.controller');

module.exports = app => {
    app.get('/api/dogs', UserController.findAllDogs);
}