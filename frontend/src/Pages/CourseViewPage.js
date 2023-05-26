import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import React from 'react';
import CourseToc from '../Components/CourseToc';
import ExerciseView from '../Components/SubtComp/exerciseview';
import VideoView from '../Components/SubtComp/videoView';

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';




const CVP = () => {
    const {id} = useParams()
    const [subtitles, setSubtitles] = useState([]);
    const [exvisible, setExvisible] = useState(false)
    const [exercises, setExercises] = useState([])
    const [vidvisible, setVidvisible] = useState(false)
    const [videos, setVideos] = useState([])
    // const classes = useStyles


    const [opened, { open, close }] = useDisclosure(false); //for the drawer


    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://www.localhost:3500/api/instructor/getCourse?id='+id);
        const data = await response.json();
        const subtitlez = data.subtitle; // update this line
        setSubtitles(subtitlez);
      }
      fetchData();
    }, []);


    useEffect(()=>{


      if(exercises.name){
        // console.log(exercises)
        setVidvisible(false)
        setExvisible(true)
        
      }
    
    },[exercises])
    
    useEffect(()=>{


      if(videos.vidname){
        // console.log(videos)
        setExvisible(false)
        setVidvisible(true)
        
      }
    
    },[videos])

  

    
      
    function showExercise(id){
      let ex= {}

      for (let i = 0; i < subtitles.length; i++) {
        const exercises = subtitles[i].exercises;
        for (let j = 0; j < exercises.length; j++) {
          if (exercises[j]._id === id) {
            ex= exercises[j];
            setExercises(exercises[j])
          }
        } 
      }

      if(!ex.name){
         ex.error =  "Exercise not found"; 
      }
     

    }



    function showVideo(id){
      let vid= {}

      for (let i = 0; i < subtitles.length; i++) {
        const vids = subtitles[i].video; // we have many subtitles, this checks the first subtitle element if it has 
        for (let j = 0; j < vids.length; j++) { //a for loop inside the videos objects of one subtitle
          if (vids[j]._id === id) {
             setVideos(vids[j])
          }
        } 
      }

      
     

    }


    
    

    return ( 
       <div class="drawer&content flex">
           
           <Button class=' text-red-600 font-bold' onClick={open}>Open Course Content</Button>


               <Drawer opened={opened} onClose={close} title="Drawer Title">
                      <CourseToc
                        className="subtitledrawer" //styling
                        subtitles={subtitles}   //data or props
                        showExercise={showExercise} //functions
                        showVideo={showVideo}  //functions
                      />
                </Drawer>
           
          <div className="subcontent ml-28 mt-28">
              {exvisible && <ExerciseView className="exercise-eview" exercises={exercises} />}
              {vidvisible && <VideoView videoId= {videos} />}
          </div>

           
   


   
  

      


       </div>
     );
}
 
export default CVP;