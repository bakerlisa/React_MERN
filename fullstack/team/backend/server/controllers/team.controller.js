const Team = require('../models/team.model');

// FIND
module.exports.allTeams = (req, res) => {
    Team.find()
        .then(allDaTeams => res.json({ teams: allDaTeams }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding all teams', error: err }));
}

module.exports.singleTeam = (req,res) => {
    Team.findOne({_id: req.params.id})
    .then(singleTeamInfo => res.json({ author: singleTeamInfo}))
    .catch(err => res.status(400).json({ message: 'Something went wrong finding team', error: err }));
}

module.exports.editTeam = (req,res) => {
    Team.findOneAndUpdate({_id: req.params.id},
        req.body,
        { new: true, runValidators: true })
    .then(updateTeam => res.json({ updatedTeam: updateTeam }))
    .catch(err => res.status(400).json({ message: 'Something went wrong when updating team', error: err }));
}

// CREATE
module.exports.createTeam = (req,res) => {
    Team.create(req.body)
    .then(newTeam => res.json({ createdTeam: newTeam }))
    .catch(err => res.status(400).json({ message: 'Something went wrong creating team', error: err }));
}

// DELETE
module.exports.deleteTeam = (req,res) => {
    Team.deleteMany({_id: req.params.id})
    .then(result => res.json({ result: result}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when deleting team', error: err }));
}
