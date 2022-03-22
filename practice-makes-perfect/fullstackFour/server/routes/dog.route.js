const DogController = require('../controllers/dog.controller');

module.exports = app => {
    app.get('/api/dogs', DogController.findAllDogs);
    app.post('/api/new/dog', DogController.createDog)
}