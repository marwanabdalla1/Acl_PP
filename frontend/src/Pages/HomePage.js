import { Grid } from '@mui/material';
import MediaCard from '../Components/CardPreview';
import useFetch from '../functions/useFetch';
import axios from 'axios';
import { useEffect, useState } from 'react';
function CourseGrid() {

  //all of the objects retrieved from useFetch are optional
  const [corptr, setCorptr] = useState(false)
  const [indtr, setIndtr] = useState(false)
  const [isadmin, setIsadmin] = useState(false)
  const [isinstructor, setIsinstructor]= useState(false)
  const usertoken =localStorage.getItem('token')

  console.log(usertoken)
  const userole = localStorage.getItem('role')
  console.log(userole)
// Set custom headers
  const header = {
    'x-auth-token': usertoken
  };


  useEffect(()=> {

    if(userole) {
      if (userole==='individual_Trainee') setIndtr(true) 
      if (userole==='corporate_trainee') setCorptr(true) 
      if (userole==='instructor') setIsinstructor(true) 
      if (userole==='admin') setIsadmin(true) 
      
    }

    },[])


  const { data: courses, isPending, error } = useFetch('http://www.localhost:3500/api/instructor/getCourses', {header});


  if (isPending) {
    return <div>Loading...</div>;
  }

  // render an error message if there was an error fetching the data
  if (error) {
    return <div>{error}</div>;
  }

   




  return (
    <div style={{ width: '100%' }}>

    <div className='coursesdiv'>
    <Grid container spacing={2}>
      {courses.map((course) => (
        <Grid item key={course.id} xs={12} sm={6} md={4}>
          <MediaCard course={course} />
        </Grid>
      ))}
    </Grid>
    </div>
     
    </div>
   
  );
}

export default CourseGrid;
