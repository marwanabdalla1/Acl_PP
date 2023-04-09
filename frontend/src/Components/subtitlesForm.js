
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

const SubtitlesForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  let location = useLocation();

  // const course = location.state?.course;
  // const Course = course ? course.Course : undefined;
  const { Course } = location.state



  console.log(Course)
  const  [corz, setCorz] = useState([Course])
  const [subtitles, setSubtitles] = useState([{title: "", Video: "", exercises: []}]);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [exercises, setExercises] = useState([]);
  const history = useHistory();
  console.log(subtitles)
  //when i save everything i will have a button that will concantenate everything together or something idk lol

  const onSubmit = (data) => {
    const newSubtitles = [...subtitles]
    newSubtitles[currentSubtitleIndex] = {...newSubtitles[currentSubtitleIndex], title: data.chapter, video: data.Video}
    setSubtitles(newSubtitles)
 
  }
  



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

  const onSubmitExercise = (data) => {
    
   
    const newSubtitles = [...subtitles]
    const currentSubtitle = newSubtitles[currentSubtitleIndex]
    const newExercises = [...currentSubtitle.exercises, {question: data.question}] //concatenate the list of exercises of this subtitle with another exercise 
    const newSubtitle = {...currentSubtitle, exercises: newExercises} //concatenate the list of exercises of this subtitle with the new list of exercises
    newSubtitles[currentSubtitleIndex] = newSubtitle
    setSubtitles(newSubtitles)

  };
  const currentSubtitle = subtitles[currentSubtitleIndex];

  //It should have a video, a title, a exercise component , the subtitle component is set in the end 
  return (
    <div>
       <h1>Subtitles Form</h1>
      <form className="subtitle-form" onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="chapter">Chapter Title:</label>
         <input id="chapter" {...register("chapter", { required: true })} />
       {errors.chapter && <span className="error">This field is required</span>}

         <label htmlFor="Video">Video:</label>
         <input id="Video" {...register("Video", { required: true })} />
         {errors.Video && <span className="error">This field is required</span>}

        <button className="save-button" type="submit">Save</button>      </form>

      <form className="exercise-form" onSubmit={handleSubmit(onSubmitExercise)}>
        <label htmlFor="question">Question:</label>
         <input id="question" {...register("question", { required: true })} />
        {errors.question && <span className="error">This field is required</span>}

         <button className="save-button" type="submit">Save and Add Another Exercise</button>
      </form>

       <div>
         {currentSubtitle.exercises.map((exercise, index) => (
           <div key={index}>
             <h2>Exercise {index + 1}</h2>
             <p>Question: {exercise.question}</p>
          </div>
        ))}
      </div>

       <div className="button-container">
        <button className="save-button" onClick={handleMakeAnotherSubtitle}>Make Another Subtitle</button>
        <button className="saveCont-button" onClick={handleSaveAndContinue}/>
        </div>
   </div>
  );
};

export default SubtitlesForm;

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useLocation } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";

// const SubtitlesForm = () => {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();

//   const location = useLocation();
//   const { Course } = location.state?.Course || {};
//   const [subtitles, setSubtitles] = useState([{title: "", video: "", exercises: []}]);
//   const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
//   const history = useHistory();

//   const onSubmit = (data) => {
//     const newSubtitles = [...subtitles];
//     newSubtitles[currentSubtitleIndex] = {...newSubtitles[currentSubtitleIndex], title: data.chapter, video: data.Video};
//     setSubtitles(newSubtitles);
//   };

  // const onSubmitExercise = (data) => {
  //   const newSubtitles = [...subtitles]; //gets the existing list of subtitles
  //   const currentSubtitle = newSubtitles[currentSubtitleIndex]; // gets the current subtitle object
  //   const newExercises = [...currentSubtitle.exercises, { question: data.question }]; //for this last object sets the new exercise object for it 
  //   const newSubtitle = { ...currentSubtitle, exercises: newExercises };
  //   newSubtitles[currentSubtitleIndex] = newSubtitle;
  //   setSubtitles(newSubtitles);
  // };

//   const handleSaveAndContinue = () => {
//     console.log(subtitles)
//     history.push({
//       pathname: '/'
//     });
//   };



//   const handleMakeAnotherSubtitle = () => {
//     const newSubtitles = [...subtitles, { title: "", video: "", exercises: [] }];
//     setSubtitles(newSubtitles);
//     setCurrentSubtitleIndex(newSubtitles.length - 1);
//   };
//   console.log(subtitles)
//   const currentSubtitle = subtitles[currentSubtitleIndex];

//   return (
//     <div>
//       <h1>Subtitles Form</h1>
//       <form className="subtitle-form" onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="chapter">Chapter Title:</label>
//         <input id="chapter" {...register("chapter", { required: true })} />
//         {errors.chapter && <span className="error">This field is required</span>}

//         <label htmlFor="Video">Video:</label>
//         <input id="Video" {...register("Video", { required: true })} />
//         {errors.Video && <span className="error">This field is required</span>}

//         <button className="save-button" type="submit">Save</button>
//       </form>

//       <form className="exercise-form" onSubmit={handleSubmit(onSubmitExercise)}>
//         <label htmlFor="question">Question:</label>
//         <input id="question" {...register("question", { required: true })} />
//         {errors.question && <span className="error">This field is required</span>}

//         <button className="save-button" type="submit">Save and Add Another Exercise</button>
//       </form>

//       <div>
//         {currentSubtitle.exercises.map((exercise, index) => (
//           <div key={index}>
//             <h2>Exercise {index + 1}</h2>
//             <p>Question: {exercise.question}</p>
//           </div>
//         ))}
//       </div>

//       <div className="button-container">
//         <button className="save-button" onClick={handleMakeAnotherSubtitle}>Make Another Subtitle</button>
//         <button className="saveCont-button" onClick={handleSaveAndContinue}/>
//         </div>
//    </div>
//  );
//  };

//  export default SubtitlesForm;
