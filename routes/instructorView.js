const express = require('express')
const router = express.Router()
const { createExercise, createSubtitle} = require('../controller/instructorController')



// router.get('/', (req, res) =>{
    
// })


router.post( '/createExercise', createExercise);
router.post('/createsubtitle', createSubtitle)



module.exports = router