const PersonController = require('../controllers/person.controller')

module.exports = app => {
    app.get('/api/users', PersonController.findAllUsers)
    app.post('/api/new/user', PersonController.newUser)
}
