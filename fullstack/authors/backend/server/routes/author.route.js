const AuthorsController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorsController.allAuthors);
    app.get('/api/author/:id', AuthorsController.singleAuthor);
    app.post('/api/create/author', AuthorsController.createAuthor);
    app.delete('/api/delete/author/:id', AuthorsController.deleteAuthor);
    app.patch('/api/update/author/:id', AuthorsController.editAuthor)
}