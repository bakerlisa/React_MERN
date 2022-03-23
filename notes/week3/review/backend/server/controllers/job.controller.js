const Job = require('../models/Job.model');

module.exports.findAllJobs = (req, res) => {
    Job.find()
        .then(allDaJobs => res.json({ Jobs: allDaJobs }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding all jobs', error: err }));
}

module.exports.findOneSingleJob = (req, res) => {
    Job.findOne({ _id: req.params.id })
        .then(oneSingleJob => res.json({ Job: oneSingleJob }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding single job', error: err }));
}

module.exports.createNewJob = (req, res) => {
    Job.create(req.body)
        .then(newlyCreatedJob => res.json({ Job: newlyCreatedJob }))
        .catch(err => res.status(400).json({ message: 'Something went wrong creaging new job', error: err }));
}

module.exports.updateExistingJob = (req, res) => {
    Job.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJob => res.json({ Job: updatedJob }))
        .catch(err => res.status(400).json({ message: 'Something went wrong updating job', error: err }));
}

module.exports.deleteAnExistingJob = (req, res) => {
    Job.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: 'Something went wrong deleting job', error: err }));
}