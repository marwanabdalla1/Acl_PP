const Subtitle = require('../model/subtitleSchema')
const Exercise = require('../model/exerciseSchema')
const Course = require('../model/courseSchema')
const Question = require('../model/questionSchema')
var fos = require('filter-objects');
const { inspect } = require('util');


const createQuery = require('filter-query').createQuery;


const instructorController = {

  createCourses: async (req, res) => { 
   console.log(req.body.course.title)
    const course = new Course({
      title: req.body.course.title,
      author: req.body.course.author,
      subject: req.body.course.subject,
      instructor: req.body.course.instructor,
      totalhours : req.body.course.totalhours,
      rating : req.body.course.rating,
      price: req.body.course.price,
      

      

     
    });
    
    try {
      const result = await course.save();
      res.json(result);
      console.log(course)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

 




    createSubtitle: async (req, res) => {
      console.log(req.body.subtitle.courseid)
        const subtitle = new Subtitle({
          name: req.body.subtitle.name,
          video: req.body.subtitle.video,
          totalhours: req.body.subtitle.totalhours,
          courseid: req.body.subtitle.courseid,
          // exercises: req.body.subtitle.exercises.map(id => mongoose.Types.ObjectId(id)),
          // courseid: req.body.subtitle.courseid.map(id => mongoose.Types.ObjectId(id))
          // courseid: [req.body.subtitle.courseid[0].courseid] // extract the courseid from the first element of the array

    
       
      });
      
      try {
        const result = await subtitle.save();
        res.json(result);
        console.log(subtitle)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }, 



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
      } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
      }
  },
   

    createQuestion: async (req, res) => {
      const question = new Question ({
          question: req.body.question,
          chocies: req.body.choices,
          answer: req.body.answer,
          courseid: req.body.courseid
      })


      try {
          const result = await question.save()
          res.json(result)
          console.log(question)
      } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
      }
  },
   

  migrate: async  (req,res) => {
    const subtitles = await Subtitle.find({});
    for (const subtitle of subtitles) {
      subtitle.courseid = subtitle.courseid[0];
      await subtitle.save();
    }
    console.log('Migration complete!');
  }
  
  ,

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


    else if (req.query.minPrice & req.query.maxPrice) {
      filters.price = {$gte: req.query.minPrice, $lte: req.query.maxPrice}

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
 

      //  console.log( inspect(results, { depth : null }) ); 
        
        res.json(results)


    },

    searchCourse: async (req, res) => {
      const searchQuery = req.query.q;

      const courses = await Course.find({
        $or: [
          {title: {$regex: searchQuery, $options: 'i'}},
          {author: {$regex: searchQuery, $options: 'i'}},
          {subject: {$regex: searchQuery, $options: 'i'}},
        ]
      })
      console.log(courses)
      res.json(courses)
    }
    ,

    getCourse: async (req, res) => {
      const filters = {}

      if (req.query.id) {
        filters._id = req.query.id
      }


        const results = await Course.findById(filters).populate({
            path: 'subtitle',
            select: 'name video totalhours exercises',
            populate: {
                path: 'exercises',
                model: 'Exercise'
              } 
          })


          console.log(filters)
          console.log(results)
           res.json(results)
      

    }

  
      
    

}


module.exports = instructorController
