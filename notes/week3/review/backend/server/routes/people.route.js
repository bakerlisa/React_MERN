const PeopleController = require('../controllers/people.controller');

module.exports = app => {
    app.get('/api/people', PeopleController.findAllPeoples);
    app.get('/api/person/:id', PeopleController.findOneSinglePeople);
    app.patch('/api/update/person/:id', PeopleController.updateExistingPeople);
    app.post('/api/create/person', PeopleController.createNewPeople);
    app.delete('/api/delete/person/:id', PeopleController.deleteAnExistingPeople);
}