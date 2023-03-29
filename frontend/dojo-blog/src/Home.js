import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";




const Home = () => {
   
    

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
    <div className="home">
       { isPending && <div> Loading... </div>}
      {blogs && <BlogList blogs= {blogs} title="All Blogs!"></BlogList>}
    </div>
  );
}
 
export default Home;