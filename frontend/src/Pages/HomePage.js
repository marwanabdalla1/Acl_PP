import { Grid } from '@mui/material';
import CourseCard from '../Components/CourseCard';
import useFetchH from '../functions/useFetchH';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import FilterDrawer from '../Components/drawer'
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';


import { useDispatch,useSelector } from 'react-redux'
import { increment, addcourse } from '../redux/Slices/Slices/cartCount';


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

  // const user = useSelector((state)=> state.user.value)
  const count = useSelector((state)=> state.cart.value)

  const [cont, setCont] = useState(count)
  useEffect(()=> {

    if(userole) {
      if (userole==='individual_Trainee') setIndtr(true) 
      if (userole==='corporate_trainee') setCorptr(true) 
      if (userole==='instructor') setIsinstructor(true) 
      if (userole==='admin') setIsadmin(true) 
      
    }

    },[])


  const { data: courses, isPending, error } = useFetchH('http://www.localhost:3500/api/instructor/getCourses', {header});

  const dispatch = useDispatch()

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
    <div class="flex">
         
         {/* maybe i can add some add here later */}


         <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', minHeight: '100vh' }}>
        <Grid container spacing={-10} justify="center" className="flex col-span-4">
        
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={3} className="mx-1 mb-2">
            <CourseCard course={course} />
          </Grid>
        ))}

        </Grid>
     
    </div>
    </div>
   
  );
}

export default CourseGrid;
