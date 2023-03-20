const Subtitle = require('../model/subtitleSchema')
const Exercise = require('../model/exerciseSchema')
const Course = require('../model/courseSchema')

const instructorController = {


    createExercise: async (req, res) => {
        const exercise = new Exercise ({
            question: req.body.question,
            chocies: req.body.choices,
            answer: req.body.answer,
            subtitleid: req.body.subtitleid
        })


        try {
            const result = await exercise.save()
            res.json(result)
            console.log(exercise)
        } catch (eroor) {
            res.status(500).json({error: error.message})
        }
    },




    createSubtitle: async (req, res) => {
        const subtitle = new Course({
          name: req.body.name,
          video: req.body.video,
          totalhours: req.body.totalhours,
          exercises: req.body.exercises,
    
       
      });
      
      try {
        const result = await subtitle.save();
        res.json(result);
        console.log(subtitle)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }, 


    

    createCourse: async (req, res) => {
        const subtitle = new Course({
          title: req.body.title,
          author: req.body.author,
          date: req.body.date,
          subject: req.body.subject,
          instructor: req.body.instructor,
          totalhours : req.body.totalhours,
          rating : req.body.rating,
         // exercises: req.body.exercises,
          subtitles: req.body.subtitles
    
          
    
         
        });
        
        try {
          const result = await course.save();
          res.json(result);
          console.log(course)
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }


}


module.exports = {createSubtitle, createExercise} 
