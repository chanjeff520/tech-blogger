const {Blog} = require('../models');

const blogData = [
    {
        title: "Why Did People Start Using HelloWorld!",
        text: "Just Because...",
        time_posted: 'November 07, 2022 10:00:00',
        user_id: 1
    },
    {
        title: "Parsley is not the best Green, and I can prove it",
        text: "Every since the dawn of time, Parsely was said to be the best validation api out there. But I create a better one, the Hemply.",
        time_posted: 'November 08, 2022 04:20:00',
        user_id: 2
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;