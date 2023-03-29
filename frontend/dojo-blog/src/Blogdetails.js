import { useHistory, useParams } from "react-router-dom";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams()
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs/'+id)
    const history = useHistory()


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
            <h2>Blog Details  {id} </h2>
            { isPending && <div> Loading... </div>}
            {error && <div> {error}</div>}

            {blogs && 
            (       <article>
                        <h2>{ blogs.title }</h2>
                        <p> Written by: { blogs.author }</p>
                        <div>{ blogs.body }</div>
                    </article>
                    
            )

               
            }
            <button onClick={handleDelete}> Delete</button>


        </div>
      );
}
 
export default BlogDetails;