const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', Jokecontroller.getAllJokes)
}