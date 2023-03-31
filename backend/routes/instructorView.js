const express = require('express')
const router = express.Router()
const { createExercise, createSubtitle, filterCourse, getCourses, getCourse, searchCourse} = require('../controller/instructorController')



// router.get('/', (req, res) =>{
    
// })


router.post( '/createExercise', createExercise);
router.post('/createsubtitle', createSubtitle)

router.get('/filterCourse', filterCourse)


router.get('/searchCourse', searchCourse)


router.get('/getCourses', getCourses)
router.get('/getCourse', getCourse)



module.exports = router