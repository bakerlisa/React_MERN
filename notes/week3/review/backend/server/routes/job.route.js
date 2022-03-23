const JobController = require('../controllers/Job.controller');

module.exports = app => {
    app.get('/api/jobs', JobController.findAllJobs);
    app.get('/api/jobs/:id', JobController.findOneSingleJob);
    app.patch('/api/update/jobs/:id', JobController.updateExistingJob);
    app.post('/api/create/jobs', JobController.createNewJob);
    app.delete('/api/delete/jobs/:id', JobController.deleteAnExistingJob);
}