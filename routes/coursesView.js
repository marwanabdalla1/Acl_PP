const express = require('express')
const router = express.Router()
const { createCourse} = require('../controller/coursesController')



// router.get('/', (req, res) =>{
    
// })


router.post( '/', createCourse);



module.exports = router