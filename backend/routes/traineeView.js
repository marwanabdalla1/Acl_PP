const express = require('express')
const router = express.Router()

const {getCartCourses} = require('../controller/traineeController')


router.get('/getCartCourses',getCartCourses )  

module.exports = router 