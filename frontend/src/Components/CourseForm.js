// I could create a use state up that whenenever i create this data it concatenates to the array of use state

// I can make the exercise component as a parent to the subtitles component that can then pass its form data as a prop?


import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import SubtitlesForm from './subtitlesForm'

const CourseForm =() => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [Course, setCourse] = useState([])
    const history = useHistory();

//   const onSubmit = data => console.log(data);
    

  const onSubmit = data => setCourse(data);

    console.log(Course)


    const handleSaveAndContinue = () => {
        history.push({
          pathname: '/subtitleform',
          state: { Course }
        });
      };


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("Title:", { required: true })} />
        <input {...register("Author:", { required: true })} />
      <input {...register("Subject:", { required: true })} />
      <input {...register("Instructor:", { required: true })} />
      <input {...register("totalhours:", { required: true })} />
      <input {...register("price:", { required: true })} />

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <Link
        to={{
            pathname: "/subtitleform",
            state: { Course: Course }
        }}
        >
         <input type="button" value="Save and Continue" />
      </Link>
      <input type="submit" value="Save and Add Another Exercise" />

    </form>
  );
}
export default CourseForm;

