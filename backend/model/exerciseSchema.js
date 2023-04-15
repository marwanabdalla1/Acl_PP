const { number } = require('joi')
const mongoose = require('mongoose')


const exerciseSchema = new mongoose.Schema({
  name: String,


  // the question id references the list of questions objects
  questionid: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
  }],

  //the subtitle id reference the subtitle to which this exercise object belong to 
  subtitleid: {
    type: String,
    ref: 'Subtitle'
  }
  });

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
