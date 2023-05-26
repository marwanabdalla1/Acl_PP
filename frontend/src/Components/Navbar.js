import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';
import { Books } from 'tabler-icons-react';
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
        

        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button>My Account</Button>
          </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<Books size={15} strokeWidth={2} color={'#4069bf'} />}>My Courses</Menu.Item>
             <Link to ="/signup">
                <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item> 
                </Link> 
              <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
              <Menu.Item
                icon={<IconSearch size={14} />}
                rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
              >
                Search
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
              <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
            </Menu.Dropdown>
    </Menu>
      </div>
    </nav>
  );
};
 
 
export default Navbar;