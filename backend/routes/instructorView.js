const express = require('express')
const router = express.Router()
const { migrate, createCourses,createExercise, createSubtitle,
     createQuestion, filterCourse, getCourses, getCourse, searchCourse,
      updatecourse, updatesubtitle, updateexercise}
 = require('../controller/instructorController')
 const auth = require('../middleware/auth')
 const admin = require('../middleware/rolesAuth')



router.post('/createCourses', createCourses)


router.post('/createsubtitle', createSubtitle)
router.post( '/createExercise', createExercise);
router.post( '/createQuestion', createQuestion);



router.put('/modifycourse', updatecourse)
router.put('/modifysubtitle', updatesubtitle)
router.put('/modifyexercise', updateexercise)



router.get('/filterCourse', filterCourse)
router.get('/migrate', migrate)


router.get('/searchCourse', searchCourse)
 

router.get('/getCourses', [auth, admin], getCourses)
router.get('/getCourse', getCourse)



module.exports = router