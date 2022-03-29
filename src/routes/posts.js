const app = require('express');
const Router = app.Router();
const postsController = require('../controller/postsController');

Router.get('/', async (req, res) => { 
    try {
        const posts = await postsController.getPosts();
        return res.status(200).json({data: posts, messege: "Request success!"});
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
});

Router.route('/:id')
.get(async (req, res) => {
    try {
        const id = req.params.id;
        return res.status(200).json({ id, messege: "Request by id success!" });
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
})
.put(async (req, res) => {
    try {
        const id = req.params.id;
        return res.status(200).json({ id, message: "Request update success!" });
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
})
.delete(async (req, res) => {
    try {
        const id = req.params.id;
        return res.status(200).json({ id, message: "Request delete success!" });
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
})

module.exports = Router;