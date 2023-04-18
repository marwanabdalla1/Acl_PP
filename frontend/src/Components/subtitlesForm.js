import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios';

const SubtitlesForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  let location = useLocation();

  // const course = location.state?.course;
  // const Course = course ? course.Course : undefined;
  const { Course, CourseIdz } = location.state
  const  [crz, setCrz] = useState(Course)
  console.log('Course id: '+CourseIdz)
 



   const [subtitles, setSubtitles] = useState([{title: "", Video: "", exercises: []}]);
   //using my way completely ditching the array thing
   const [subtitle, setSubtitle] = useState({});
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [exercises, setExercises] = useState({questionid: []});
  const [question, setQuestion] = useState({});
  const [subtitleid, setSubtitleid] = useState({});
  const [exerciseid, setExercideid] = useState({});
  const [questionid, setQuestionid] = useState({});
  
  const history = useHistory();
  // console.log(subtitles)
  //when i save everything i will have a button that will concantenate everything together or something idk lol


 




  const onSubmit = (data) => {
    // i need to check here if i can check for empty objects being submitted
    const newSubtitles = [...subtitles]
    newSubtitles[currentSubtitleIndex] = {...newSubtitles[currentSubtitleIndex], title: data.chapter, video: data.Video}
    const SubtoIns = newSubtitles[currentSubtitleIndex]
    setSubtitles(newSubtitles)
    setSubtitle(data)
    //set the course id for the subtitle before inserting 


   
  }
   
  useEffect(() => {
    if (subtitle.name) {
        subtitle.courseid = CourseIdz

      console.log(subtitle)
    Axios.post('http://localhost:3500/api/instructor/createsubtitle', {
      subtitle
      })
   
      .then(response => {
        console.log('Subtitle ID:', response.data._id);
        setSubtitleid(response.data._id) ; 
        // we could add the saving subtitle id to the course id one here


        // we will find this course id and then modify it's content, in other words add the it of the subtitle id to the course
        Axios.put('http://localhost:3500/api/instructor/modifycourse?id='+CourseIdz, {subtitleId: response.data._id})


        //it is an update request that finds the course with this subtitle and then update the course array with that new subtitle
        history.push({
          pathname: '/exerciseform',
          state: {
            Subtitleid: response.data._id,
            Courseid: CourseIdz
          }
        });  })
        .catch(error => {
          console.log(error);
        });
  } 
    
  }, [subtitle]); 
 
// we will first add the cour ses then we will take that id and use it when we insert the subtitles and exitCode
// we will make a for loop for each subtitle, insert it, and then we get the id of that inserted subtitle 



  //the button after being done with everything 
  const handleSaveAndContinue = () => {
    history.push({
      pathname: '/'
      
    });
  };
  const handleMakeAnotherSubtitle = (data)=> {
    const newSubtitles = [...subtitles, {title: "", Video: "", exercises: []}]
    setSubtitles(newSubtitles)
    setCurrentSubtitleIndex(newSubtitles.length-1)
  }

  

 
  const currentSubtitle = subtitles[currentSubtitleIndex];

  return (
    <div>
       <h1>Subtitles Form</h1>
      <form className="subtitle-form" onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="name">Chapter Title:</label>
         <input id="name" {...register("name", { required: true })} />
       {errors.name && <span className="error">This field is required</span>}

         <label htmlFor="video">Video:</label>
         <input id="video" {...register("video", { required: true })} />
         {errors.video && <span className="error">This field is required</span>}

        <button className="save-button" type="submit">Save & Create Subtitle</button>  
            </form>

     
   </div>
  );
};

export default SubtitlesForm;




// const onSubmitExercise = (data) => {
    
   
//   const newSubtitles = [...subtitles]
//   const currentSubtitle = newSubtitles[currentSubtitleIndex]
//   const newExercises = [      ...currentSubtitle.exercises,  { question: data.question, options: data.options, answer: data.answer }    ]
//   // I think we should do something here like for example intialize a new array of 
//   const newSubtitle = {...currentSubtitle, exercises: newExercises} //concatenate the list of exercises of this subtitle with the new list of exercises
//   newSubtitles[currentSubtitleIndex] = newSubtitle
//   setSubtitles(newSubtitles)
//   //we will make a post method to the exercise object, take its id, use this id when inserting to the questions object.
//   // after inseting the questions Object, we should 
//   setQuestion(data)
//   //we should insert the exercsie object first with the newly created subtitle id 
//    let Exerciseid
//   Axios.post('http://localhost:3500/api/instructor/createExercise', {
//     exercises
//     })
//     .then(response => {
//       console.log('Object ID:', response.data._id);
//       // SetExer = response.data._id; // Assign CourseID within the callback function

//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//     console.log(Exerciseid)



//     const questiosexercise = {...question.exerciseid, exerciseid: Exerciseid }
//     setQuestion(questiosexercise)

//     let Questionid
//     Axios.post('http://localhost:3500/api/instructor/createQuestion', {
//       question
//       })
//       .then(response => {
//         console.log('Object ID:', response.data._id);
//         Questionid = response.data._id; // Assign CourseID within the callback function

//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//       console.log(Exerciseid)
// };
