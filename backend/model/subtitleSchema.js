const { number } = require('joi')
const mongoose = require('mongoose')


const subtitleSchema = new mongoose.Schema({
    name: String,
    video: {
      type: [String],
      required: true
    },
    totalhours: Number,
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
      }],
      courseid: {
        type: String,
        ref: 'Course'
      }
  });

  

  const Subtitle = mongoose.model('Subtitle', subtitleSchema)

  module.exports = Subtitle
  