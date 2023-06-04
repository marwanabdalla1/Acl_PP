const express = require('express')
const router = express.Router()
const { payforCourse} = require('../controller/stripeController')






router.post( '/', payforCourse);



module.exports = router