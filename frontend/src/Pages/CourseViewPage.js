import { Grid } from '@mui/material';
import MediaCard from '../Components/CardPreview';
import Navbar from '../Components/Navbar';
import useFetch from '../functions/useFetch';
import { useHistory, useParams } from "react-router-dom";
import {Drawer as MUIDRAWER,List,ListItem, ListItemIcon,  ListItemText, makeStyles, ListItemSecondaryAction
} from "@material-ui/core"
import { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import axios from 'axios';
// add the usefetch 


// I will make cards for the video and exercise page

// I will also make a drawer, should i add it here? so it can has access to the use states and hook states

const useStyles = makeStyles({
    drawer: {
        display: 'flex',
        flex: '0 0 15%' ,
        width: "160px"
    }
})
const CVP = () => {
    const {id} = useParams()
    const history = useHistory()
    const [expandedSubtitle, setExpandedSubtitle] = useState(null);

    console.log(id)
    //fetch a specific course from the database
    const {data: course, isPending, error} = useFetch('http://www.localhost:3500/api/instructor/getCourse?id='+id)
    if (isPending) {
        return <div>Loading...</div>;
      }
    
      // render an error message if there was an error fetching the data
      if (error) {
        return <div>{error}</div>;
      }

    console.log('visited course details')
    console.log(course)
 
    console.log(course.subtitle)
   
    const classes = useStyles

    const subtitle = course.subtitle
// I can make in this list another component that will show the subtitles, we will have in it a hook for showing the rest of the code, but it should be in that subtitle component

// We can also make this component have buttons that onclick sets the hook in the outercourse view page with the video or exercise component pressed 
    const subtitlelist = (subtitle) => (
        <List>
          {subtitle.map((subtitle) => {
            return (
              <ListItem key={subtitle._id} disablePadding>
                <ListItemButton>
                  <ListItemText primary={subtitle.name} />
                </ListItemButton>
                <List>
                  {/* Add the return keyword before the JSX element */}
                  {subtitle.exercises.map((exercise) => {
                    return (
                      <ListItemButton key={exercise._id} disablePadding>
                        <ListItem>
                          <ListItemText primary={exercise.name} />
                        </ListItem>
                      </ListItemButton>
                    );
                  })}
                </List>
              </ListItem>
            );
          })}
        </List>
      );
      
    
    
 
    
      
      



    

    return ( 
       <div>
        <p> Hello There!</p>

        <MUIDRAWER variant="permanent"   className={classes.drawer}>
            {subtitlelist(subtitle)}
        </MUIDRAWER>



       </div>
     );
}
 
export default CVP;