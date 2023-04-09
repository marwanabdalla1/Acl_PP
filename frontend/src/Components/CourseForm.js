// I could create a use state up that whenenever i create this data it concatenates to the array of use state

// I can make the exercise component as a parent to the subtitles component that can then pass its form data as a prop?




// we will first try with submitting a course to mongodb
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import SubtitlesForm from './subtitlesForm';
import Axios from 'axios';



const CourseForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [course, setCourse] = useState({});
  const history = useHistory();


  // const onSubmit = async (data) => {
  //   console.log(data)
  //   await setCourse(data);
  //   console.log(course)
  //   Axios.post('http://localhost:3500/api/instructor/createCourse', {
  //     course
  //    })
  //    .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  // };

  const onSubmit = async (data) => {
    console.log(data);
    await setCourse(data);
  };

  useEffect(() => {
    if (course.title) {
      console.log(course)
      Axios.post('http://localhost:3500/api/instructor/createCourse', {
        course
      })

      
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

       history.push({
      pathname: '/subtitleform',
      state: { Course: course }
    });
    }
  }, [course]);
  //  const onSubmit =  async (data) => {
  //   console.log(data)
  //    setCourse(data);
  //   console.log(course); // logs the updated course object
  //   if (Object.keys(data).length > 0) {
  //   history.push({
  //     pathname: '/subtitleform',
  //     state: { course }
  //   });
  // }
  // };



  // const handleSaveAndContinue = async (data) => {
  //   await setCourse(data);
  //   console.log(course)

  //   history.push({
  //     pathname: '/subtitleform',
  //     state: { course }
  //   });
  // };
  const handleSaveAndContinue = async (data) => {
    console.log(data)
    await setCourse(data);
    console.log(course); // logs the updated course object
    history.push({
      pathname: '/subtitleform',
      state: { course }
    });
  };
  
  

  return (
    <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title:</label>
      <input id="title" {...register("title", { required: true })} />
      {errors.title && <span className="error">This field is required</span>}

      <label htmlFor="author">Author:</label>
      <input id="author" {...register("author", { required: true })} />
      {errors.author && <span className="error">This field is required</span>}

      <label htmlFor="subject">Subject:</label>
      <input id="subject" {...register("subject", { required: true })} />
      {errors.subject && <span className="error">This field is required</span>}

      <label htmlFor="instructor">Instructor:</label>
      <input id="instructor" {...register("instructor", { required: true })} />
      {errors.instructor && <span className="error">This field is required</span>}

      <label htmlFor="total-hours">Total Hours:</label>
      <input id="total-hours" {...register("totalhours", { required: true })} />
      {errors.totalhours && <span className="error">This field is required</span>}

      <label htmlFor="price">Price:</label>
      <input id="price" {...register("price", { required: true })} />
      {errors.price && <span className="error">This field is required</span>}

      <div className="button-container">
        <input className="submit-button" type="submit" value="Save and Add Another Exercise" />
        {/* <button className="save-button" onClick={handleSaveAndContinue}>Save and Continue</button> */}
      </div>
    </form>
   
  );
};

export default CourseForm;

