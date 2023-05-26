import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [courseinfo, setCourseinfto] = useState('')
    const [corptr, setCorptr] = useState(false)
    const [indtr, setIndtr] = useState(false)
    const [isadmin, setIsadmin] = useState(false)
    const [isinstructor, setIsinstructor]= useState(false)
    const usertoken =localStorage.getItem('token')
    const userole = localStorage.getItem('role')


    useEffect(()=> {

      if(userole) {
        if (userole==='individual_Trainee') setIndtr(true) 
        if (userole==='corporate_trainee') setCorptr(true) 
        if (userole==='instructor') setIsinstructor(true) 
        if (userole==='admin') setIsadmin(true) 
        
      }
  
      },[])

      console.log(userole)
      console.log(isadmin)
      console.log(indtr)
  return (
    <nav className="Navbar">
      <h1 className="text-3xl font-bold underline">Coursera el ghalaba</h1>



      <div className="search-bar">
        <input type="text" placeholder="Search" value= {courseinfo}  
         onChange={(e) => setCourseinfto(e.target.value)}/>

        <Link to={`/searchcourse/${courseinfo}`}>
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        
      { (isadmin || isinstructor)  && <Link className="font-bold underline"
        to={`/createcourse`}>
          <button> Create Course</button>
        </Link>}
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