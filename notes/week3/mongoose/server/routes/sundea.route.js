const SundeaController = require('../contorllers/sundeas.controller')

module.exports = app => {
    app.get("api/test", SundeaController.testResponse);
}