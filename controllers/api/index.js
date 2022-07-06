const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoute');
const commentRoutes = require('./commentRoute');

router.use('/comment', commentRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;