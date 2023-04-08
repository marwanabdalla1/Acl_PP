import { Link } from "react-router-dom";
import { useState } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [courseinfo, setCourseinfto] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }


  return (
    <nav className="Navbar">
      <h1>Coursera el ghalaba</h1>



      <div className="search-bar">
        <input type="text" placeholder="Search" value= {courseinfo}  
         onChange={(e) => setCourseinfto(e.target.value)}/>

        <Link to={`/searchcourse/${courseinfo}`}>
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        
        <Link to={`/createcourse`}>
          <button> Create Course</button>
        </Link>
      </div>
{/* we will make this similar to the course details link  */}



      <div className="links">
        <Link to="/"> Home </Link>
        <Link
          to="/create"
          style={{
            color: 'white',
            backgroundColor: '#4e35f1',
            borderRadius: '8px'
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};
 
 
export default Navbar;