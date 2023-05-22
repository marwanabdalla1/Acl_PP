import { Grid } from '@mui/material';
import MediaCard from '../Components/CardPreview';
import useFetch from '../functions/useFetch';

function CourseGrid() {

  //all of the objects retrieved from useFetch are optional
  const { data: courses, isPending, error } = useFetch('http://www.localhost:3500/api/instructor/getCourses');
  
  const usertoken =localStorage.getItem('token')

  console.log(usertoken)


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
