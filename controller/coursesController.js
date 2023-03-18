const Course = require('../model/courseSchema');

const CourseController = {


  createCourse: async (req, res) => {
    const course = new Course({
      title: req.body.title,
      author: req.body.author,
      date: req.body.date,
      subject: req.body.subject,
      instructor: req.body.instructor,
      subtitles: req.body.subtitles, 
      totalhours : req.body.totalhours,
      rating : req.body.rating,
      exercises: req.body.exercises

     
    });
    
    try {
      const result = await course.save();
      res.json(result);
      console.log(course)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  

};

module.exports = CourseController;

