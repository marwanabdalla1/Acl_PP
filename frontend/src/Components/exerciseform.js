//awel haga lama yegy el page di eno hay create exercise object bel id beta3 el subtitle id el gayelo

//momken yeb2a gayelo push men el subtitles form //
// button make another exercise hay3mel post request tanya be nafs el subtitle id el 3ando


import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios';

import { useRef } from "react";


const ExerciseForm =() => {
  let location = useLocation();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { Subtitleid, Courseid } = location.state
  const [exercise, setExercise] = useState({});
  const [exerciseid, setExerciseid] = useState({});
  const [showExerciseForm, setShowExerciseForm] = useState(true);
  const [showSubtitleForm, setShowSubtitleForm] = useState(false);
  const [question, setQuestion] = useState({});
  const [backtoex, setBacktoex] = useState(false);
  const [backtosub, setBacktosub] = useState(false);
  const actionRef = useRef(null);
const [action, setAction] = useState("");
const [isQuestionCreated, setIsQuestionCreated] = useState(false);

  const history = useHistory();
// console.log('This exercises subtitle id is' + Subtitleid)
// console.log('This exercises Course id is' + Courseid)
    

//we will create the automatic exercise here



useEffect(()=> {
  if (exercise.name) {
    exercise.subtitleid = Subtitleid
    console.log(exercise)
    Axios.post('http://localhost:3500/api/instructor/createExercise', {
      exercise
    })

    .then(response => {
      console.log('Exercise ID:', response.data._id);
      console.log('with Subtitle ID:', response.data._id);
      console.log('with Course ID:', response.data._id);
      setExerciseid(response.data._id) ; 
      // we could add the saving subtitle id to the course id one here

      //it is an update request that finds the course with this subtitle and then update the course array with that new subtitle
      //after creating the new 
      Axios.put('http://localhost:3500/api/instructor/modifysubtitle?id='+Subtitleid, {exerciseId: response.data._id})
    
    
    })
       .catch(error => {
        console.log(error);
      });
  } 
}, [exercise])

//we will insert an exercise by default with the subtitle id (ya3ny hat insert be nasfs el tare2a bardo)
// a new instance of the exercise id is created by default
//THIS PAGE will have 4 buttons, add another question, save and add another exercise (new exercise form with same data from the subtitle id and the course id ), save and add another subtitle (which will have only the data from the course id only)
//before each redirect you need to save everything
//should we save each form to its related thing before redirectying?
//on submitting new exercises we will keep keep inserting them with the same exercise id



const onSubmitExercise = (data) => {
  setExercise(data)
  setShowExerciseForm(false)
  setShowSubtitleForm(true)
}





// const onSubmit = (data, event) => {
//   event.preventDefault();
//   setIsQuestionCreated(false)
//   if (action==="question") {
//     const { question, optionA, optionB, optionC, optionD, answer } = data;
//     console.log(data.action)  
//     // console.log('The action is', actionRef.current.value);
//     const choices = [optionA, optionB, optionC, optionD];
//     const newQuestion = { question, choices, answer };
//     setQuestion(newQuestion)
//     console.log('The data is'+ newQuestion)
//     console.log('The question is' + question)
//     console.log(action)
//   }
//   else if (action === "exercise") {
//     const { question, optionA, optionB, optionC, optionD, answer } = data;
//     console.log(data.action)  
//     // console.log('The action is', actionRef.current.value);
//     const choices = [optionA, optionB, optionC, optionD];
//     const newQuestion = { question, choices, answer };
//     setQuestion(newQuestion)
//     console.log('The data is'+ newQuestion)
//     console.log('The question is' + question)
//     console.log(action) 
//     // setShowSubtitleForm(false)
//     // setShowExerciseForm(true)
    
//     window.location.reload(); // refresh the component

  
//   } 
//   else if (action === "subtitle") {
//     const { question, optionA, optionB, optionC, optionD, answer } = data;
//     console.log(data.action)  
//     // console.log('The action is', actionRef.current.value);
//     const choices = [optionA, optionB, optionC, optionD];
//     const newQuestion = { question, choices, answer };
//     setQuestion(newQuestion)
//     console.log('The data is'+ newQuestion)
//     console.log('The question is' + question)
//     console.log(action) 
//     // setShowSubtitleForm(false)
//     // setShowExerciseForm(true)
//     if (isQuestionCreated) {
//       history.push({
//         pathname: '/subtitleform',
//         state: {
//           CourseIdz: Courseid
//         }
//       });
//     } }
// }
const onSubmit = (data, event) => {
  event.preventDefault();
  // setIsQuestionCreated(false)
  const { question, optionA, optionB, optionC, optionD, answer } = data;
  console.log(data.action)  
  // console.log('The action is', actionRef.current.value);
  const choices = [optionA, optionB, optionC, optionD];
  const newQuestion = { question, choices, answer };
  setQuestion(newQuestion)
  console.log('The question is' + question)
  if (action==="question") {
    
  }
  else if (action === "exercise") {
   
  
    setTimeout(()=> {
      window.location.reload();
    }, 2000);
    


  } 
  else if (action === "subtitle") {

    setBacktosub(true)
    }
}
useEffect(() => {
  if (question.question) {
    console.log(exerciseid)
    question.exerciseid = exerciseid 
    console.log('The question exercise id' +question.exerciseid)
    console.log(question)
  Axios.post('http://localhost:3500/api/instructor/createQuestion', {
    question
    })
 
    .then(response => {
      console.log('Question ID:', response.data._id);
      // setSubtitleid(response.data._id) ; 
      Axios.put('http://localhost:3500/api/instructor/modifyexercise?id='+exerciseid, {questionid: response.data._id})
      setBacktoex(true)
      if (backtosub) {
        console.log(backtosub)
        history.push({
          pathname: '/subtitleform',
          state: {
            CourseIdz: Courseid
          }
        });
      }
       })
      .catch(error => {
        console.log(error);
      });
}
  
}, [question]); 

    

      
      return (
        <div>
          {showExerciseForm && (
          <div>
        <h1>Add Exercise</h1>
      <form className="exercise-form" onSubmit={handleSubmit(onSubmitExercise)}>
        <label htmlFor="name">Exercise Name:</label>
        <input id="name" {...register("name", { required: true })} />
        {errors.name && <span className="error">This field is required</span>}
        <button className="save-button" type="submit">Save Exercise</button>
        </form> 
        </div>
          )}


        {showSubtitleForm && (
        <div>
      <h1>Add questions for this Exercise</h1>
      <form className="exercise-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="question">Question:</label>
        <input id="question" {...register("question", { required: true })} />
        {errors.question && <span className="error">This field is required</span>}

        <label htmlFor="optionA">Option A:</label>
        <input id="optionA" {...register("optionA", { required: true })} />
        {errors.optionA && <span className="error">This field is required</span>}

        <label htmlFor="optionB">Option B:</label>
        <input id="optionB" {...register("optionB", { required: true })} />
        {errors.optionB && <span className="error">This field is required</span>}

        <label htmlFor="optionC">Option C:</label>
        <input id="optionC" {...register("optionC", { required: true })} />
        {errors.optionC && <span className="error">This field is required</span>}

        <label htmlFor="optionD">Option D:</label>
        <input id="optionD" {...register("optionD", { required: true })} />
        {errors.optionD && <span className="error">This field is required</span>}

        <label htmlFor="answer">Answer:</label>
        <input id="answer" {...register("answer", { required: true })} />
        {errors.answer && <span className="error">This field is required</span>}

        {/* <input type="hidden" name="questionAction" value="saveAndAddAnotherQuestion" /> */}
  {/* Add another hidden input for "Save and Add Another Exercise" */}
  {/* <input type="hidden" name="exerciseAction" value="saveAndAddAnotherExercise" /> */}

  <button className="save-button" type="submit" name="questionSubmit" value="Save and Add Another Question" onClick={() => setAction("question")}>
    Save and Add Another Question
  </button>
  <button className="save-button" type="submit" name="exerciseSubmit" value="Save and Add Another Exercise" onClick={() => setAction("exercise")}>
    Save and Add Another Exercise
  </button>
  <button className="save-button" type="submit" name="exerciseSubmit" value="Save and Add Another Subtitle" onClick={() => setAction("subtitle")}>
    Save and Add Another Subtitle
  </button>
      </form>
      </div>
        )}
       </div>
      )
}
export default ExerciseForm;
