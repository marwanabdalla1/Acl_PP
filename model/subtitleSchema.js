const { number } = require('joi')
const mongoose = require('mongoose')


const subtitleSchema = new mongoose.Schema({
    name: String,
    video: String,
    totalhours: Number,
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
      }],
    courseid: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
  });

  

  const Subtitle = mongoose.model('Subtitle', subtitleSchema)

  module.exports = Subtitle
  