const { number } = require('joi')
const mongoose = require('mongoose')


const exerciseSchema = new mongoose.Schema({
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

    subtitleid:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtitle'
    }]
  });

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
