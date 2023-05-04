import { Link } from "react-router-dom";


const BlogList = ({ courses, title }) => {
    return (
      <div className="blog-list">
        <h2>{ title }</h2>


        {courses.map(course => (
          <div className="course-preview" key={course._id} >            
            <h2> {course.title}</h2>
            <p>{course.author}</p>
            <Link to = {`/blogs/${course._id}`}> 
              {/* <h2>{ course._id }</h2> */}
              <p>Course Details</p>
              {/* <p>Written by { course.author }</p> */}
            </Link>
            
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;

