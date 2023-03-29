const debug = require('debug')('app:startup')
const dbdebug = require('debug')('app:db')
const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan')
const Joi = require('joi')


const courses = require('./routes/coursesView')
const exercise = require('./routes/instructorView')
const express = require('express')






const {
    urlencoded
} = require('express')
const app = express()
app.use(express.json());

require('dotenv').config();

const mongoose = require('mongoose')
const connectDB = require('./model/dbconnect')

//in the index, we are going to use the the app routes, we will also add the conncection string, and the express app
// bas 3ady momken ne3mel class tanya feha conncection string

const { createExercise, createSubtitle, filterCourse, getCourses } = require('./controller/instructorController')

const Course = require('./model/courseSchema');

const Exercise = require('./model/exerciseSchema');

const Subtitle = require('./model/subtitleSchema')

//Connect to the DB 
connectDB();

//getCourses()
// filterCourse()


app.use((req, res, next) => {
    // Allow all origins to access the API
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Set the allowed HTTP methods to be used on the API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Set the allowed headers to be used on the API
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Pass control to the next middleware
    next();
  });
  


app.use('/api/createcourse', courses)
app.use('/api/instructor', exercise)


const port = process.env.PORT || 3500

app.listen(port, () => console.log(`Listening on Port ${port}`))