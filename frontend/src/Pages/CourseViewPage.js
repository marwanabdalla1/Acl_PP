import { Grid } from '@mui/material';
import MediaCard from '../Components/CardPreview';
import Navbar from '../Components/Navbar';
import useFetch from '../functions/useFetch';
import { useHistory, useParams } from "react-router-dom";
import {Drawer as MUIDRAWER,List,ListItem, ListItemIcon,  ListItemText, makeStyles, ListItemSecondaryAction
} from "@material-ui/core"
import { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import axios from 'axios';
import SubtitleDrawer from '../Components/subtitledrawer';
import ExerciseView from '../Components/exerciseview';

import Split from "react-split"
import VideoView from '../Components/videoView';



// const useStyles = makeStyles({
//     drawer: {
//         display: 'flex',
//         flex: '0 0 15%' ,
//         width: "160px",
//         zIndex: 1
//     }
// })


const CVP = () => {
    const {id} = useParams()
    const [subtitles, setSubtitles] = useState([]);
    const [exvisible, setExvisible] = useState(false)
    const [exercises, setExercises] = useState([])
    const [vidvisible, setVidvisible] = useState(false)
    const [videos, setVideos] = useState([])
    // const classes = useStyles


    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://www.localhost:3500/api/instructor/getCourse?id='+id);
        const data = await response.json();
         console.log(data); // add this line
        const subtitlez = data.subtitle; // update this line
        setSubtitles(subtitlez);
      }
      fetchData();
      // console.log(subtitles)
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
      console.log(id)
      let vid= {}

      for (let i = 0; i < subtitles.length; i++) {
        const vids = subtitles[i].video; // we have many subtitles, this checks the first subtitle element if it has 
        console.log(vids)
        for (let j = 0; j < vids.length; j++) { //a for loop inside the videos objects of one subtitle
          if (vids[j]._id === id) {
             setVideos(vids[j])
          }
        } 
      }

      
     

    }


    
    

    return ( 
       <div>
        <p> Hello There!</p>

            <Split
                sizes={[2, 98]}
                direction="horizontal"
                className="split"
          >
            <SubtitleDrawer
              className="subtitledrawer"
              subtitles={subtitles}
              showExercise={showExercise}
              showVideo={showVideo}
            />
          <div className="ExVidview">
              {exvisible && <ExerciseView className="exercise-eview" exercises={exercises} />}
              {vidvisible && <VideoView videoId= {videos} />}
          </div>

           
        </Split> 

      


       </div>
     );
}
 
export default CVP;