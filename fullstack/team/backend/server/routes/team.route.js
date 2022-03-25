const TeamController = require('../controllers/team.controller');

module.exports = app => {
    app.get('/api/teams', TeamController.allTeams);
    app.get('/api/team/:id', TeamController.singleTeam);
    app.post('/api/create/team', TeamController.createTeam);
    app.delete('/api/delete/team/:id', TeamController.deleteTeam);
    app.patch('/api/update/team/:id', TeamController.editTeam)
}