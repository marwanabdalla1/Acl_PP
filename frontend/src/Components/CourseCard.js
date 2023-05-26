import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import myImage from '../images/coffee.png'
import { useEffect, useState } from 'react';

export default function CourseCard({ course }) {


// we will import the tokens here as well
const [courseinfo, setCourseinfto] = useState('')
    const [corptr, setCorptr] = useState(false)
    const [indtr, setIndtr] = useState(false)
    const [isadmin, setIsadmin] = useState(false)
    const [isinstructor, setIsinstructor]= useState(false)
    const usertoken =localStorage.getItem('token')
    const userole = localStorage.getItem('role')


    useEffect(()=> {

      if(userole) {
        if (userole==='individual_Trainee') setIndtr(true) 
        if (userole==='corporate_trainee') setCorptr(true) 
        if (userole==='instructor') setIsinstructor(true) 
        if (userole==='admin') setIsadmin(true) 
        
      }
  
      },[])


      return (
      <Card key={course.id} sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={myImage} title={course.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.subject}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Rating: {course.rating} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Price: ${course.price} 
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/courses/${course._id}`}>
          <Button size="small">Learn More</Button>
        </Link>       
        {  (corptr || indtr) && <Link to={`/courses/${course._id}`}>
          <Button size="small">Buy</Button>
        </Link>   }    
      </CardActions>
    </Card>
  );
}
 