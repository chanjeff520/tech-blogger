const router = require('express').Router();
const {User, Blog, Comment} = require('../models');


router.get('/', async(req, res) =>{
    try{
        const blogData = await Blog.findAll({
            include: [User]
        });
        
        const blogs = blogData.map((blog)=>blog.get({plain: true}));
        console.log(blogs);
        res.status(200).render("homepage", {blogs, logged_in: req.session.logged_in});

    }
    catch(err){
        res.status(500).json(err);
    }
})


router.get('/login', async(req, res) =>{
    try{
        res.status(200).render("login")
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;