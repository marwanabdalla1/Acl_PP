const express = require('express')
const router = express.Router()
const CourseController = require('../controller/coursesController')



// router.get('/', (req, res) =>{
    
// })


router.post('/', CourseController.createCourse);


module.exports = router