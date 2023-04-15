//awel haga lama yegy el page di eno hay create exercise object bel id beta3 el subtitle id el gayelo

//momken yeb2a gayelo push men el subtitles form //
// button make another exercise hay3mel post request tanya be nafs el subtitle id el 3ando


import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import SubtitlesForm from './subtitlesForm'
import { useLocation } from "react-router-dom";

const ExerciseForm =() => {
  let location = useLocation();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { Subtitleid } = location.state

    const [ex,setEx] = useState([])
  const history = useHistory();
console.log(Subtitleid)
    
//we will insert an exercise by default with the subtitle id (ya3ny hat insert be nasfs el tare2a bardo)

//on submitting new exercises we will keep keep inserting them with the same exercise id
  const onSubmit = data => setEx([...ex, data]);

    console.log(ex)


    const handleSaveAndContinue = () => {
        history.push({
          pathname: '/subtitleform',
          state: { ex }
        });
      };

      
      return (
        <div>
           <h1>Exercise Form</h1>
          
    
            <button className="save-button" type="submit">Save</button>      
    
          <form className="exercise-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="question">Question:</label>
             <input id="question" {...register("question", { required: true })} />
            {errors.question && <span className="error">This field is required</span>}
             <label>Options:</label>
            <div>
              <label htmlFor="optionA">
                <input type="radio" {...register("options")} value="a" id="optionA" />
                A
              </label>
              <label htmlFor="optionB">
                <input type="radio" {...register("options")} value="b" id="optionB" />
                B
              </label>
              <label htmlFor="optionC">
                <input type="radio" {...register("options")} value="c" id="optionC" />
                C
              </label>
              <label htmlFor="optionD">
                <input type="radio" {...register("options")} value="d" id="optionD" />
                D
              </label>
              </div>
              <label htmlFor="answer">Answer:</label>
             <input id="answer" {...register("answer", { required: true })} />
            {errors.answer && <span className="error">This field is required</span>} 
             <button className="save-button" type="submit">Save and Add Another Exercise</button>
    
          </form>
          
           
    
           {/* <div className="button-container">
            <button className="save-button" onClick={handleMakeAnotherSubtitle}>Make Another Subtitle</button>
            <button className="saveCont-button" onClick={handleSaveAndContinue}>Save and Return to Home Page</button>
            </div> */}
       </div>
      )
}
export default ExerciseForm;
