const debug = require('debug')('app:startup')
const dbdebug = require('debug')('app:db')
const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan')
const Joi = require('joi')


const logger = require('./middleware/logger')
const courses = require('./view/coursesView')
const home = require('./routes/home')
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



//Connect to the DB 
connectDB();





//get all published backend courses, sort them by their name, pick only their name and author and diplay the





//routing fucntions
app.use('/', home)
app.use('/api/createcourse', courses)



const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on Port ${port}`))