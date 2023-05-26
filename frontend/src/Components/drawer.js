import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import RatingSlider from './minicomponents/ratingslider'
import PricesSlider from './minicomponents/priceslider'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {postmaxprice, postminprice, postmaxrating, postminrating} from '../features/coors'

import { Link } from 'react-router-dom';

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [courseTitles, setCourseTitles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://www.localhost:3500/api/instructor/getCourses');
      const data = await response.json();
      const titles = data.map(course => course.title);
      setCourseTitles(titles);
    }
    fetchData();
    console.log(courseTitles)
  }, []);



//   Here is the reduc useselect and dispatch functions

  const { minRating, maxRating, minPrice, maxPrice } = useSelector(state => ({
    minRating: state.course.minRating,
    maxRating: state.course.maxRating,
    minPrice: state.course.minPrice,
    maxPrice: state.course.maxPrice
  }));


  const filterparams = {
    minRating: minRating,
    maxRating: maxRating,
    minPrice: minPrice,
    maxPrice: maxPrice
  }



  const dispatch = useDispatch()





  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };




  const drawer = (
    <div >
      {/* <div className={classes.toolbar} /> */}
      <div  />
      <Divider />
     <h2>Filter Courses</h2>
     <RatingSlider/>
     <PricesSlider/>
   
         <Link to={`/FilterCourse/${new URLSearchParams(filterparams).toString()}`}>
     <button>Filter</button>
        </Link>  
      <Divider/>
    </div>
  );


  return (
    <div class="max-w-xs "  >
      
            {drawer}
        
     
    </div>
  );
}
















const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));





export default ResponsiveDrawer;




