// I could create a use state up that whenenever i create this data it concatenates to the array of use state

// I can make the exercise component as a parent to the subtitles component that can then pass its form data as a prop?


import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import SubtitlesForm from './subtitlesForm'

const ExerciseForm =() => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [ex,setEx] = useState([])
//   console.log(watch("example")); // watch input value by passing the name of it
  const history = useHistory();

//   const onSubmit = data => console.log(data);
    

  const onSubmit = data => setEx([...ex, data]);

    console.log(ex)


    const handleSaveAndContinue = () => {
        history.push({
          pathname: '/subtitleform',
          state: { ex }
        });
      };

      
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("First Name:", { required: true })} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("Last Name:", { required: true })} />


      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" value="Save and Add Another Exercise" />
      <Link
        to={{
            pathname: "/subtitleform",
            state: { ex: ex }
        }}
        >
         <input type="button" value="Save and Continue" />
      </Link>
    </form>
  );
}
export default ExerciseForm;
