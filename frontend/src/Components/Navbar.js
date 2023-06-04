import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { useDisclosure } from '@mantine/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';
import { Books, Home2, ShoppingCart} from 'tabler-icons-react';
import { IconUserCircle } from '@tabler/icons-react';
import { useHistory } from "react-router-dom";
import { Drawer, Group } from '@mantine/core';
import FilterDrawer from '../Components/drawer'

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false); //for the drawer

    const [courseinfo, setCourseinfto] = useState('')
    const [corptr, setCorptr] = useState(false)
    const [indtr, setIndtr] = useState(false)
    const [isadmin, setIsadmin] = useState(false)
    const [isinstructor, setIsinstructor]= useState(false)
    const usertoken =localStorage.getItem('token')
    const userole = localStorage.getItem('role')
    const history = useHistory()
    const [showNavbar, setShowNavbar] = useState(true); // state variable to track whether navbar should be rendered
   // const count = useSelector((state)=> state.count.value)

  //All the items added to the cart
  const courses = useSelector((state)=> state.cart.favoriteCourses)
   console.log(courses)



    useEffect(()=> {

      if(userole) {
        if (userole==='individual_Trainee') setIndtr(true) 
        if (userole==='corporate_trainee') setCorptr(true) 
        if (userole==='instructor') setIsinstructor(true) 
        if (userole==='admin') setIsadmin(true) 
        
      }
      console.log('navbar rendered!')
      },[])

      function handleShopClick() {
       if (courses.length>0) {
          history.push({
            pathname: '/checkout',
            state: {
              course: courses,
            }
          })
       }
      }
      
      
  return (
    <nav className="Navbar" >
      <h1 className="text-3xl font-bold underline">Coursera el ghalaba</h1>

   <Drawer opened={opened} onClose={close} title="Drawer Title">
            <FilterDrawer class="filterdrawer"/>

          </Drawer>

          <Button class=' text-white-600 font-bold ml-4 cursor-pointer
           bg-blue-300 rounded-md
          ' onClick={open}>Filter Courses</Button>

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



      <div className=" flex gap-5">
        <Link to="/home" > 
            <Home2
              size={30}
              strokeWidth={2}
              color={'blue'}
            />
        </Link>
        
         <ShoppingCart
            size={30}
            strokeWidth={2}
            color={'blue'}
            onClick={handleShopClick}
            style={{ cursor: 'pointer'}}
          />

        <Menu shadow="md" width={200}>
          <Menu.Target>
            <IconUserCircle size={30}  color={'blue'} style={{ cursor: 'pointer'}} />

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