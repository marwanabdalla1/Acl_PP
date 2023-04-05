import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    <div>
      <div className={classes.toolbar} />
      <Divider />
     <h2>Filter Courses</h2>
     <RatingSlider/>
     <PricesSlider/>
     {/* <Link to={{
        pathname:'/FilterCourse',
        search: `?${new URLSearchParams(filterparams).toString()}`,
        state: { id: filterparams }

     }}> */}
         <Link to={`/FilterCourse/${new URLSearchParams(filterparams).toString()}`}>
     <button>Filter</button>
        </Link>  
      <Divider/>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
     
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};















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




