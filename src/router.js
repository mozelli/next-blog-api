const app = require('express');
const Router = app.Router();
const postsController = require('./controller/postsController');

Router.get('/posts', async (req, res) => { 
    try {
        const posts = await postsController.getPosts();
        return res.status(200).json(posts);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
});

module.exports = Router;