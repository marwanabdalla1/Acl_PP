const Course = require('../model/courseSchema');

const CourseController = {


  createCourse: async (req, res) => {
    const course = new Course({
      name: req.body.name,
      author: req.body.author,
      tags: req.body.tags,
      isPublished: req.body.isPublished
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

