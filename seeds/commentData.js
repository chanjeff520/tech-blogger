const { builtinModules } = require('module');
const { join } = require('path')
const {Comment} = require('../models')

const commentData = [
    {
        text: "So this is my interpretation of MVC",
        user_id: 1,
        blog_id: 1
    },
    {   
        text: "If anyone have an question please reply in the comments",
        user_id: 1,
        blog_id: 1
    },
    {
        text: "This was very interesting, thank you for sharing!!",
        user_id: 2,
        blog_id: 1,
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;