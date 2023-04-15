const express = require('express')
const router = express.Router()
const { migrate, createCourses,createExercise, createSubtitle, createQuestion, filterCourse, getCourses, getCourse, searchCourse} = require('../controller/instructorController')



// router.get('/', (req, res) =>{
    
// })



router.post('/createCourses', createCourses)


router.post('/createsubtitle', createSubtitle)
router.post( '/createExercise', createExercise);
router.post( '/createQuestion', createQuestion);


router.get('/filterCourse', filterCourse)
router.get('/migrate', migrate)


router.get('/searchCourse', searchCourse)


router.get('/getCourses', getCourses)
router.get('/getCourse', getCourse)



module.exports = router