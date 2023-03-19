const { number } = require('joi')
const mongoose = require('mongoose')






const courseSchema = new mongoose.Schema({
    title: String,
    author: String,
    date: {
        type: Date,
        default: Date.now
    },
    subject: String,
    instructor: String,
    subtitles: String,
    totalhours: Number,
    rating: {
        type: Number,
        default: 0
      },
    price: Number, 
    subtitle: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtitle'
    }]
})



const Course = mongoose.model('Course', courseSchema)

module.exports = Course




// a course should have a title, total hours, course rating, price, subject, instructor, course subtitles, exercises, total hours of each exercises


// a course should have many exercises ( a list of reference objects) 