const debug = require('debug')('app:startup')
const dbdebug = require('debug')('app:db')
const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan')
const Joi = require('joi')
const express = require('express')

const userView = require('./routes/userView')
const courses = require('./routes/coursesView')
const instructorView = require('./routes/instructorView')
const payView = require('./routes/payView')
const traineeView = require('./routes/traineeView')



const {
    urlencoded
} = require('express')
const app = express()
app.use(express.json());

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined')
  process.exit(1)
}

require('dotenv').config();

const mongoose = require('mongoose')
const connectDB = require('./dbconnect')

//in the index, we are going to use the the app routes, we will also add the conncection string, and the express app
// bas 3ady momken ne3mel class tanya feha conncection string

const { createExercise, createSubtitle, filterCourse, getCourses } = require('./controller/instructorController')

const Course = require('./model/courseSchema');

const Exercise = require('./model/exerciseSchema');

const Subtitle = require('./model/subtitleSchema')

//Connect to the DB 
connectDB();




app.use((req, res, next) => {
    // Allow all origins to access the API
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Set the allowed HTTP methods to be used on the API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Set the allowed headers to be used on the API
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-auth-token');

  //I don't think this should be like this
    // res.setHeader('Access-Control-Allow-Headers', '*');
    // Pass control to the next middleware
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', 'x-auth-token');

    next();
  });
  
app.use('create-checkout-session', payView)
app.use('/api/user', userView)
app.use('/api/instructor', instructorView)

app.use('/api/trainee', traineeView)

const port = process.env.PORT || 3500

app.listen(port, () => console.log(`Listening on Port ${port}`))