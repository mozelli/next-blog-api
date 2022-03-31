const app = require('express');
const Router = app.Router();
const postsController = require('../controller/postsController');

Router.get('/', postsController.get);

Router.post('/', postsController.add);

Router.route('/:id')
.get(postsController.getById)
.put(postsController.update)
.delete(postsController.delete);

module.exports = Router;