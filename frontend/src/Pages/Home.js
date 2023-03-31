import { useEffect, useState } from "react";
import BlogList from "../Components/Bloglist";
import useFetch from "../functions/useFetch";
import MediaCard from "../Components/CardPreview";




const Home = () => {
   
    

    const {data: courses, isPending, error} = useFetch('http://www.localhost:3500/api/instructor/getCourses')

    return (
    <div className="home">
       { isPending && <div> Loading... </div>}
      {/* {courses && <BlogList courses= {courses} title="All Courses!"></BlogList>} */}
      <MediaCard />
    </div>
  );
}
  
export default Home;