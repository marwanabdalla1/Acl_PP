import './index.css';
import 'tailwindcss/tailwind.css';

import Navbar from './Components/Navbar'
// import Home from '../../backend/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import CourseDetails from './Components/CourseDetails';
import Notfound from './Notfound';
import MediaCard from './Components/CardPreview';
import HomePage from './Pages/HomePage';
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
import Drawer2 from './Components/Drawer2'
import CVP from './Pages/CourseViewPage'
import LoginPage from './Pages/loginPage';


function App() {
  const link = "www.google.com"
   
  return (
    <Router>
      <div className="App">
        {/* <h1>hello</h1> */}
      <Navbar/>
      {/* <Profile/>
      <Login></Login>
      <ChangeColor/> */}
        <div class="content max-w-7xl  mx-0  px-5 py-5 h-full ">
        <Switch>

        <Route exact path="/">
          <LoginPage/>
        </Route>

        <Route exact path="/home">
          <div className="homepage  flex">
              <div  className="  w-1/4 flex-1 ">
                <ResponsiveDrawer />
              </div>
              <div  className=" w-3/4">
                <HomePage /> 
                {/* <loginPage/> */}
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
            <CVP/>
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
