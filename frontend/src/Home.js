import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";




const Home = () => {
   
    

    const {data: courses, isPending, error} = useFetch('http://www.localhost:3500/api/instructor/getCourses')

    return (
    <div className="home">
       { isPending && <div> Loading... </div>}
      {courses && <BlogList courses= {courses} title="All Courses!"></BlogList>}
    </div>
  );
}
  
export default Home;