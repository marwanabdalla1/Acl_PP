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
 



   const [subtitles, setSubtitles] = useState({});
   //using my way completely ditching the array thing
   const [subtitle, setSubtitle] = useState({});
   const [subtitlevideos, setSubtitlevideos] = useState([])
   const [action, setAction] = useState("");
   const [hideName, setHideName] = useState(false)
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
 
  const [subtitleid, setSubtitleid] = useState({});

  
  const history = useHistory();
  // console.log(subtitles)


 

// Make 2 forms. make one that sets the title and once it's or make two buttons that when one is pressed it closes the input for the text button?? (try this one first)
//boolean use state for if the subtitle is created and it's only set to true if the
//button that continues to the exercise form is pressed 
//the useeffect posts only if this condition is set to true


  const onSubmit = (data, event) => {
    event.preventDefault()
    const {name, vidname, url} = data
    if (data.name && !hideName) {
      
      subtitle.name=name
      console.log(subtitle.name)
      console.log(data.name)
      setHideName(true)
    }
    if (data.vidname) {
       const newsubtitlevideos = [...subtitlevideos, {vidname: vidname, url:url}]
      setSubtitlevideos(newsubtitlevideos)

    }
    const ss = {
      name: data.name,
      
    }


    if (action ==="redirect") {
    
    }

    if (action ==="stay") {
      
    }
   
  }
  useEffect(() => {
    subtitle.video = subtitlevideos
    console.log(subtitlevideos);
    console.log(subtitle)

    if (action==="redirect") {
        
              subtitle.courseid = CourseIdz
      
            console.log(subtitle)
          Axios.post('http://localhost:3500/api/instructor/createSubtitle', {
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

  }, [subtitlevideos]);


  



  

  

 
 // const currentSubtitle = subtitles[currentSubtitleIndex];

  return (
    <div>
       <h1>Subtitles Form</h1>
      <form className="subtitle-form" onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="name">Chapter Title:</label>
        { !hideName && <input id="name" {...register("name", { required: true })} />}
       {errors.name && <span className="error">This field is required</span>}

         <label htmlFor="vidname">Video Name:</label>
         <input id="vidname" {...register("vidname", { required: true })} />
         {errors.vidname && <span className="error">This field is required</span>}

         
         <label htmlFor="url">Video Url:</label>
         <input id="url" {...register("url", { required: true })} />
         {errors.url && <span className="error">This field is required</span>}

         <button className="save-button" type="submit" name="questionSubmit" value="Save and Add Another Video" onClick={() => setAction("stay")}>
    Save and Add Another Video
  </button>
  <button className="save-button" type="submit" name="exerciseSubmit" value="Save and Add Exercise Exercise" onClick={() => setAction("redirect")}>
    Save and Add Another Exercise
  </button>
            </form>

     
   </div>
  );
};

export default SubtitlesForm;



