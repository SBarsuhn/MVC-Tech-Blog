const router = require('express').Router();
const {User} = require('../models')

router.get('/', async (req, res) => {
    const userData = await User.findAll()
    console.log(userData)
    const user = userData.map(user => {
        user.get({
            plain: true
        })
    })
    res.render('homepage', {user})
})

module.exports = router;