import React from "react"

export default function subtitle(props){

//This subtitle component will act as a function to access all data related to the component and display it 
//



const subtitleElements = props.subtitles.map((subtitle) => (
    <div key={subtitle._id} className="subtitle-item">
      <div class=" font-bold">
        <h4 className="subtitle-name">{subtitle.name}</h4>
      </div>
  
      <div className="subtitle-items-container">
        {subtitle.exercises.map((exercise) => (
          <div key={exercise._id}>
            <button className="drawer-button "
                onClick={()=> props.showExercise(exercise._id)}
            >{exercise.name}</button>
          </div>
        ))}
        
        {subtitle.video.map((video, index) => (
          <div key={index}>
            <button className="drawer-button "
                onClick={()=> props.showVideo(video._id)}
            >{video.vidname}</button>
          </div>
        ))}
      </div>
    </div>
  ));
  



    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Subtitles</h3>
                {/* <button className="new-note" onClick={props.newNote}>+</button> */}
            </div>
            {subtitleElements}
        </section>
    )
}