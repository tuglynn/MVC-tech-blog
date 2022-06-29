const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        //render homepage.
        res.render('homepage');
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})


module.exports = router;