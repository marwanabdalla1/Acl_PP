




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

  let [courseID, setCourseID] = useState('');

  

  const onSubmit = async (data) => {
    await setCourse(data);
    
  };


  useEffect(() => {
    if (course.title) {
      Axios.post('http://localhost:3500/api/instructor/createCourses', {
        course
      })
        .then(response => {
          console.log(response.data);
          setCourseID(response.data._id);
          history.push({
            pathname: '/subtitleform',
            state: {
              Course: course,
              CourseIdz: response.data._id
            }
          });
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  
  }, [course]);
  







  
  

  return (
    <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
    {/* //  <form class="flex flex-col w-400 mx-auto" onSubmit={handleSubmit(onSubmit)}>  */}
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

      <label htmlFor="rating">Rating:</label>
      <input id="rating" {...register("rating", { required: true })} />
      {errors.rating && <span className="error">This field is required</span>}

      <label htmlFor="total-hours">Total Hours:</label>
      <input id="total-hours" {...register("totalhours", { required: true })} />
      {errors.totalhours && <span className="error">This field is required</span>}

      <label htmlFor="price">Price:</label>
      <input id="price" {...register("price", { required: true })} />
      {errors.price && <span className="error">This field is required</span>}

      <div className="button-container">
        <input className="submit-button" type="submit" value="Save and Add Exercise" />
        {/* <button className="save-button" onClick={handleSaveAndContinue}>Save and Continue</button> */}
      </div>
    </form>
   
  );
};

export default CourseForm;

