import './index.css';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import CourseDetails from './Components/CourseDetails';
import Notfound from './Notfound';
import MediaCard from './Components/CardPreview';
import CoursePage from './Pages/CoursePage';
import CourseSearch from './Components/CourseSearch'
import PrimarySearchAppBar from './Components/AppBar';
 import Profile from './Components/profile';
import Login from './Components/login';
import ChangeColor from './Components/ChangeColor';
//check for the npm youtube player and look for a demo

function App() {
 // const title = 'Welcome to the blog'
  const link = "www.google.com"
   
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Profile/>
      <Login></Login>
      <ChangeColor/>
        {/* <div className="content">
        <Switch>
          <Route exact path = "/">
            <CoursePage/>
          </Route>
          <Route path = "/create">
            <Create/>
          </Route>
          <Route path = "/courses/:id">
            <CourseDetails/>
          </Route>
          <Route path = "/searchcourse/:id">
            <CourseSearch/>
          </Route>
          <Route path = "*">
            <MediaCard/>
          </Route>
          
          

        </Switch>
      </div> */}
    </div>
    </Router>
    
  );
}  

export default App;
