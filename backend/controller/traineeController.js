const Subtitle = require('../model/subtitleSchema')
const Exercise = require('../model/exerciseSchema')
const Course = require('../model/courseSchema')
var fos = require('filter-objects');
const { inspect } = require('util');


const createQuery = require('filter-query').createQuery;


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
          subtitles: req.body.subtitles
    
          
    
         
        });
        
        try {
          const result = await course.save();
          res.json(result);
          console.log(course)
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },

      filterCourse: async (req, res) => {

            let filter = {};
            if (req.query.rating) {
            filter.rating = req.query.rating;
            }
            if (req.query.subject) {
            filter.subject = req.query.subject;
            }

            const courses = await Course.find(filter);

        
            console.log(req.query.rating)

             res.json(courses)
    
    
        }

    , 

    getCourses: async (req, res) => {

        const results = await Course.find().populate({
            path: 'subtitle',
            select: 'name video totalhours exercises',
            populate: {
                path: 'exercises',
                model: 'Exercise'
              } 
          })

        console.log( inspect(results, { depth : null }) );
    },
    getCartCourses: async (req, res) => {

      try {
      const {ids} = req.query

      if (ids==="") {
        res.status(401).json({error: 'Cart is empty'})
      }
     const CourseIds = ids.split(',').map(id => id.trim())
      const courses = await Course.find({_id: {$in: CourseIds}})

      res.json(courses)
    }

    catch (error) {
      console.error(error)
      res.status(500).json({error: 'Server error'})
    }

  }

  
      
    

}


module.exports = instructorController
