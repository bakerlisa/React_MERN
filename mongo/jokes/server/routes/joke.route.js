const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/users', JokeController.findAllUsers);
    app.get('/api/users/:id', JokeController.findOneSingleUser);
    app.put('/api/users/:id', JokeController.updateExistingUser);
    app.post('/api/users', JokeController.createNewUser);
    app.delete('/api/users/:id', JokeController.deleteAnExistingUser);
}