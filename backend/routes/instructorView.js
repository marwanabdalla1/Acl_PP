const express = require('express')
const router = express.Router()
const { createExercise, createSubtitle, filterCourse} = require('../controller/instructorController')



// router.get('/', (req, res) =>{
    
// })


router.post( '/createExercise', createExercise);
router.post('/createsubtitle', createSubtitle)

router.get('/filterCourse', filterCourse)

module.exports = router