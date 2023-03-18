const Exercise = require('../model/exerciseSchema');

const ExerciseController = {


  createExercise: async (req, res) => {
    const exercise = new Exercise({
      title: req.body.title,
      TotalHours: req.body.TotalHours
    
     
    });
    
    try {
      const result = await exercise.save();
      res.json(result);
      console.log(exercise)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  

};

module.exports = ExerciseController;
