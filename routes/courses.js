const express = require('express')
const router = express.Router()
require('dotenv').config();

const mongoose = require('mongoose')

const connectDB = require('./dbconnect')



//Connect to the DB 
 connectDB();


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date : { type: Date, default: Date.now },
    isPublished : Boolean
})

const Course = mongoose.model ('Course', courseSchema)


async function uploadCourse() {
    const course = new Course ({
        name: 'Angular course',
        author: 'Mosh',
        tags: ['angular', 'frontend'], 
        isPublished: true 
    
    })

    const result = await course.save()
    console.log(result)
}


async function getCoursses(){
    const courses = await Course
    .find({isPublished: true, tags: 'backend' })
    .sort({name: 1})
    .select({name: 1, author: 1})
    console.log(courses)
}




//get all published backend courses, sort them by their name, pick only their name and author and diplay them






getCoursses()


router.get('/', (req, res) => {
    res.send(courses)
})


router.post('/', (req, res) => {
    
    const {error} = ValidateCourse(req.body)

    if (error){
        return res.status(400).send(error.details[0].message )
        
    }
    const course = {
        id: courses.length+1, 
        name: req.body.name
    }

    courses.push(course)
    res.send(course)
})



router.put('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) return res.sendStatus(404)

    const {error} = ValidateCourse(req.body)

    if (error){
        return res.status(400).send(error.details[0].message )
        
    }
    //we need to remove the course first and add the new one
    course.name = req.body.name
    res.send(course)
})

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) return res.sendStatus(404);
    res.send(course)
})
 
router.delete('/:id', (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course)  return res.sendStatus(404)


    // to return the index of the course in the list of courses
    const index = courses.indexof(course)

    courses.splice(index, 1)

    res.send(course)
})
 
function ValidateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    
    return Joi.validate(course, schema)
}


module.exports = router