const router = require('express').Router();
const { User, Post } = require('../../models');
// const checkLogin = require('../utils/auth')


router.post('/', async (req, res) => {
    try {
        const postDB = await Post.create(req.body);
        // req.session.save(() => {
            res.status(200).json(postDB);
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }

});

module.exports = router;