const router = require('express').Router();
const {User, Post} = require('../models')
const checkLogin = require("../utils/auth");

router.get('/', async (req, res) => {
    const postData = await Post.findAll()
    const posts = postData.map(post =>  post.get({plain: true}))
    console.log(posts)
    res.render('homepage', {posts})
})
router.get('/login', async (req, res) => {
    res.render('login')
})

router.get('/post', async (req, res) => {
    res.render('post')
})



module.exports = router;