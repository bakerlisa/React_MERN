const SundeaController = require('../controllers/sundea.controller')

module.exports = app => {
    app.get("api/test", SundeaController.testResponse);
}