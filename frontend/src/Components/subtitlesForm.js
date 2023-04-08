
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const SubtitlesForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const location = useLocation();
  const { Course } = location.state;

  const [subtitle, setSubtitle] = useState([Course]);

  const onSubmit = data => setSubtitle([...subtitle, data]);
  // console.log(ex)
  console.log(subtitle)

  return (
    <div>
      <h1>Subtitles Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("Email:", { required: true })} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("Password:", { required: true })} />


      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" value="Save and Add Another Subtitle" />
      
    </form>
    </div>
  );
};

export default SubtitlesForm;