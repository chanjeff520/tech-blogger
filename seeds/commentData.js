const {Comment} = require('../models')

const commentData = [
    {
        text: "So this is my interpretation of helloWorld!",
        time_posted: 'November 07, 2022 11:00:00',
        user_id: 1,
        blog_id: 1
    },
    {   
        text: "If anyone have an question please reply in the comments",
        time_posted: 'November 07, 2022 12:00:00',
        user_id: 1,
        blog_id: 1
    },
    {
        text: "This was very interesting, thank you for sharing!!",
        time_posted: 'November 07, 2022 14:00:00',
        user_id: 2,
        blog_id: 1
    },
    {
        text: "What the heck are you even talking about bro???",
        time_posted: 'November 08, 2022 06:00:00',
        user_id: 3,
        blog_id: 2
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;