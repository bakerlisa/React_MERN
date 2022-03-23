const PeopleController = require('../controllers/People.controller');

module.exports = app => {
    app.get('/api/peoples', PeopleController.findAllPeoples);
    app.get('/api/peoples/:id', PeopleController.findOneSinglePeople);
    app.patch('/api/update/peoples/:id', PeopleController.updateExistingPeople);
    app.post('/api/create/peoples', PeopleController.createNewPeople);
    app.delete('/api/delete/peoples/:id', PeopleController.deleteAnExistingPeople);
}