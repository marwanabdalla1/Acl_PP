import { Grid } from '@mui/material';
import MediaCard from '../Components/CourseCard';
import useFetch from '../functions/useFetch';
import { useHistory, useParams } from "react-router-dom";



// this will have the fetch id similar to the one get course

function CourseGrid() {
    const {id} = useParams()
    console.log(id)

    
  const { data: courses, isPending, error } = useFetch('http://www.localhost:3500/api/instructor/searchCourse?q='+id);

  if (isPending) {
    return <div>Loading...</div>;
  }

  // render an error message if there was an error fetching the data
  if (error) {
    return <div>{error}</div>;
  } 
  return (
    <Grid container spacing={2}>
      {courses.map((course) => (
        <Grid item key={course.id} xs={12} sm={6} md={4}>
          <MediaCard course={course} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CourseGrid;