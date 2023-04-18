const mongoose = require('mongoose')


const questionSchema = new mongoose.Schema({
    question: {
      type: String,
      required: true
    },
    choices: {
      type: [String],
      required: true,
      validate: {
        validator: function(choices) {
          return choices.length === 4; // only allow four choices
        },
        message: 'MCQ must have exactly 4 choices'
      }
    },
    answer: {
      type: String,
      required: true,
      enum: ['A', 'B', 'C', 'D']
    },
    exerciseid: {
      type: String,
      ref: 'Exercise'
    }
   
  });

const Question = mongoose.model('Question', questionSchema)

module.exports = Question
