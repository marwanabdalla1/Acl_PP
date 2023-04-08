// I could create a use state up that whenenever i create this data it concatenates to the array of use state

// I can make the exercise component as a parent to the subtitles component that can then pass its form data as a prop?


import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import SubtitlesForm from './subtitlesForm';

// import './CourseForm.css';

const CourseForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [course, setCourse] = useState({});
  const history = useHistory();

  const onSubmit = (data) => {
    setCourse(data);
  };

  const handleSaveAndContinue = () => {
    history.push({
      pathname: '/subtitleform',
      state: { course }
    });
  };

  return (
    <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title:</label>
      <input id="title" {...register("Title", { required: true })} />
      {errors.Title && <span className="error">This field is required</span>}

      <label htmlFor="author">Author:</label>
      <input id="author" {...register("Author", { required: true })} />
      {errors.Author && <span className="error">This field is required</span>}

      <label htmlFor="subject">Subject:</label>
      <input id="subject" {...register("Subject", { required: true })} />
      {errors.Subject && <span className="error">This field is required</span>}

      <label htmlFor="instructor">Instructor:</label>
      <input id="instructor" {...register("Instructor", { required: true })} />
      {errors.Instructor && <span className="error">This field is required</span>}

      <label htmlFor="total-hours">Total Hours:</label>
      <input id="total-hours" {...register("totalhours", { required: true })} />
      {errors.totalhours && <span className="error">This field is required</span>}

      <label htmlFor="price">Price:</label>
      <input id="price" {...register("price", { required: true })} />
      {errors.price && <span className="error">This field is required</span>}

      <div className="button-container">
        <input className="submit-button" type="submit" value="Save and Add Another Exercise" />
        <button className="save-button" onClick={handleSaveAndContinue}>Save and Continue</button>
      </div>
    </form>
   
  );
};

export default CourseForm;

