const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/isAdmin') // a middlware function to check for is admin
const router = express.Router()
const {registerUser,authUser, getUser } = require('../controller/userController')



//if you need to authorize apis, you add the middleware here

router.post('/register', registerUser)
router.post('/auth', authUser)
router.get('/me', [auth,admin], getUser)

module.exports = router