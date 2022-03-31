const express = require('express');

const Post = require('../models/Post');

module.exports = {
    async add(request, response) {
        try {
            const post = await Post.create(request.body);
            return response.status(200).json({ post });
        } catch(error) {
            return response.status(500).json({error: error.message, message: "Registration failed."});
        }
    },
    async get(request, response){
        try {
            const posts = await Post.find();
            return response.status(200).json(posts);
        } catch (error) {
            return response.status(500).json({error: error.message, message: "Request fail to get the posts."});
        }
    },
    async getById(request, response) {
        try {
            const post = await Post.findOne({id: request.params.id});
            return response.status(200).json({ post });
        } catch(error) {
            return response.status(500).json({ error: error.message, message: "Register don't found." });
        }
    },
    async update(request, response) {
        try {
            const post = await Post.findOneAndUpdate({id: request.params.id}, {resume: request.body.resume});
            return response.status(200).json({ post });
        } catch (error) {
            return response.status(500).json({ error: error.message, message: "Can't update the register." });
        }
    },
    async delete(request, response) {
        try {
            const post = await Post.deleteOne({id: request.params.id});
            return response.status(200).json({ post });
        } catch(error) {
            return response.status(500).json({ error: error.message, message: "Can't delete the register." });
        }
    }
    
}