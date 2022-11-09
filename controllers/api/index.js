const router = require('express').Router;

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;