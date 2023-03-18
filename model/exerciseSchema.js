const { number } = require('joi')
const mongoose = require('mongoose')


const exerciseSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
   TotalHours: Number
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
