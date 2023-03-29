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



    // filtery by rating, subject, and price
  filterCourse: async (req, res) => {
    const filters = {};
    

    if (req.query.subject) {
      filters.subject = req.query.subject;
    }
    if (req.query.rating){
      filters.rating = req.query.rating
    }
    if (req.query.minRating & req.query.maxRating) {
      
      filters.rating = {$gte: req.query.minRating, $lte: req.query.maxRating}

    }
    if (req.query.price ==='free') {
      filters.price =0
    }

    if (req.query.price) {
      filters.price = req.query.price
    }

    if (req.query.minPrice & req.query.maxPrice) {
      filters.price = {$gte: req.query.minPrice, $lte: req.query.maxPrice}

    }
    
    const courses = await Course.find(filters);

    
    console.log(filters)
    res.json(courses);
  }
  
    


    ,

    searchCourse: async (req, res) => {
      // we can search for a course by title, subject, or instructor
      const filters = {}

      if (req.query.title) {
        filters.title
      }
      if (req.query.subject) {
        filters.subject
      }
      if (req.query.instructor) {
        filters.instructor
      }

      
      const courses = await Course.find(filters);
      console.log(filters)
      res.json(courses);

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
    }

  
      
    

}


module.exports = instructorController