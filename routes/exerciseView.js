const express = require('express')
const router = express.Router()
const { createExercise} = require('../controller/exerciseController')



// router.get('/', (req, res) =>{
    
// })


router.post( '/', createExercise);



module.exports = router