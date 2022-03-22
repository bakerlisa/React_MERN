const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/joke/:id', JokeController.getSingleJoke);
    app.post('/api/add/joke', JokeController.addJoke);
    app.put('/api/update/joke/:id', JokeController.updateJoke);
    app.delete('/api/delete/joke/:id', JokeController.deleteJoke);
    app.get('/api/random/joke', JokeController.randomJoke);
}