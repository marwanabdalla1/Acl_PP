import './index.css';
import Navbar from './Components/Navbar'
// import Home from '../../backend/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import CourseDetails from './Components/CourseDetails';
import Notfound from './Notfound';
import MediaCard from './Components/CardPreview';
import CoursePage from './Pages/CoursePage';
import CourseSearch from './Components/CourseSearch'
import PrimarySearchAppBar from './Components/AppBar';
import Drawer from './Components/drawer'
import Profile from './Components/profile';
import Login from './Components/login';
import ChangeColor from './Components/ChangeColor';
import ResponsiveDrawer from './Components/drawer';
import CourseFilter from './Components/CourseFilter'
import ExerciseForm from './Components/exerciseform';
import SubtitlesForm from './Components/subtitlesForm'
import fetchComp from './Components/useEffect'
import CourseForm from './Components/CourseForm';
//check for the npm youtube player and look for a demo

function App() {
 // const title = 'Welcome to the blog'
  const link = "www.google.com"
   
  return (
    <Router>
      <div className="App">
      <Navbar/>
      {/* <Profile/>
      <Login></Login>
      <ChangeColor/> */}
        <div className="content">
        <Switch>
        <Route exact path="/">
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flex: '0 0 15%' }}>
              <ResponsiveDrawer />
            </div>
            <div style={{ flex: '1' }}>
              <CoursePage />
            </div>
          </div>
        </Route>

          <Route path="/createcourse">
            <CourseForm/>
            </Route>

          <Route path="/subtitleform" component={SubtitlesForm} />
          <Route path="/exerciseform" component={ExerciseForm} />

          <Route path = "/create">
            <Create/>
          </Route>
          <Route path = "/courses/:id">
            <CourseDetails/>
          </Route>
          <Route path = "/searchcourse/:id">
            <CourseSearch/>
          </Route>
          <Route path = "/Filtercourse/:id">
            <CourseFilter/>
          </Route>
          
          <Route path = "*">
            <MediaCard/>
          </Route>
          
          

        </Switch>
      </div>
    </div>
    </Router>
    
  );
}  

export default App;
