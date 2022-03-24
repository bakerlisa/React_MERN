const Author = require('../models/author.model');

// FIND
module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(allDaAuthors => res.json({ authors: allDaAuthors }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding all products', error: err }));
}

module.exports.singleAuthor = (req,res) => {
    Author.findOne({_id: req.params.id})
    .then(singleAuthorInfo => res.json({ author: singleAuthorInfo}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single product', error: err }));
}

module.exports.editAuthor = (req,res) => {
    Author.findOneAndUpdate({_id: req.params.id},
        req.body,
        { new: true, runValidators: true })
    .then(updateAuthor=> res.json({ updatedAuthor: updateAuthor}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single product', error: err }));
}

// CREATE
module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
    .then(newAuthor => res.json({ createdAuthor: newAuthor }))
    .catch(err => res.status(400).json({ message: 'Something went wrong creating new product', error: err }));
}

// DELETE
module.exports.deleteAuthor = (req,res) => {
    Author.deleteMany({_id: req.params.id})
    .then(result => res.json({ result: result}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when deleting product', error: err }));
}
