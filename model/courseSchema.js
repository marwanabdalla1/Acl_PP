const mongoose = require('mongoose')

const connectDB = require('./dbconnect')






const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

module.exports = Course
