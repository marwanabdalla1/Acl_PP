import { Grid } from '@mui/material';
import CourseCard from '../Components/CourseCard';
import useFetch from '../functions/useFetch';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import FilterDrawer from '../Components/drawer'

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';
function CourseGrid() {
  const [opened, { open, close }] = useDisclosure(false); //for the drawer

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
    return <div> 
      <Box sx={{ display: 'flex' }}>
       <CircularProgress />
      </Box></div>;
  }

  // render an error message if there was an error fetching the data
  if (error) {
    return <div>{error}</div>;
  }

   




  return (
    <div class=" flex">


         <Drawer opened={opened} onClose={close} title="Drawer Title">
            <FilterDrawer class="filterdrawer"/>

          </Drawer>

          <Button class=' text-red-600 font-bold' onClick={open}>Filter Courses</Button>

    <div className='coursesdiv'>
        <Grid container spacing={2}>
          {courses.map((course) => (

              <Grid item key={course.id} xs={12} sm={6} md={4}>
                <CourseCard course={course} />
              </Grid>

          ))}
        </Grid>
     
    </div>
    </div>
   
  );
}

export default CourseGrid;
