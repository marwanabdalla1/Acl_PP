const debug = require('debug')('app:startup')
const dbdebug = require('debug')('app:db')
const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan') 
const Joi = require('joi')


const logger = require('./middleware/logger')
const courses = require('./routes/courses')
const home = require('./routes/home')
const express = require('express')


const { urlencoded } = require('express')
const app = express()

require('dotenv').config();

const mongoose = require('mongoose')
const connectDB = require('./dbconnect')



//Connect to the DB 
 connectDB();


//setting up the viewing template
app.set('view engine', 'pug')
app.set('views', './views')

//Using packages
app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(express.static('public'))
app.use(helmet())




//The Environment settings
console.log('My Application Name:' + config.get('name'))
console.log('My Application Mail Server:' + config.get('mail.host'))
console.log('My Application Mail Password:' + config.get('mail.password'))


if (app.get('env')==='development') {
    app.use(morgan('tiny'))
    debug('Morgan is enabled')
}

dbdebug('Marwan is enabled')


//middleware functions
app.use(logger)


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


//routing fucntions
app.use('/', home)
app.use('/api/courses', courses)



const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on Port ${port}`))