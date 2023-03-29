import { useHistory, useParams } from "react-router-dom";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams()
    console.log(id)
    //fetch a specific course from the database
    const {data: course, isPending, error} = useFetch('http://www.localhost:3500/api/instructor/getCourse?id='+id)
    const history = useHistory()

    console.log(`Course Details: ${course}`)
     //   console.log(`Course Details: ${courses.rating}`) //This is returning null

    // localhost:3500/api/instructor/getCourse?id=6418c7ea9768bbad17043901

    const handleDelete = ()=> {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE',
            
        } )
        .then(()=> {
    
            history.push('/')
        })
    
    }
    return ( 
        <div className="blog-details">
            <h2>Course Details  {id} </h2>
            { isPending && <div> Loading... </div>}
            {error && <div> {error}</div>}

            {course && 
            (       <article>
                        <h2>{ course.title }</h2>
                        <p> Written by: { course.author }</p>
                        <div>{ course.subtitle }</div>
                    </article>
                    
            )

               
            }
            <button onClick={handleDelete}> Delete</button>


        </div>
      );
}
 
export default BlogDetails;