import './index.css';
import 'tailwindcss/tailwind.css';

import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import Notfound from './Notfound';
import HomePage from './Pages/HomePage';
import CourseSearch from './Components/CourseSearch'
import ResponsiveDrawer from './Components/drawer';
import CourseFilter from './Components/CourseFilter'
import ExerciseForm from './Components/FormComponents/exerciseform';
import SubtitlesForm from './Components/FormComponents/subtitlesForm'
import CourseForm from './Components/FormComponents/CourseForm';
import CVP from './Pages/CourseViewPage'
import LoginPage from './Pages/loginPage';
import SignUp from './Components/signUp';
import Cart from './Pages/CartPage';

//components for testing redux 

function App() {
  const link = "www.google.com"
   
  return (
    <Router>
      <div className="App">


     
        <Switch>

        <Route exact path="/">
          <LoginPage/>
        </Route>

        <Route exact path="/home">
        <div class="content w-full  mx-0  py-5 h-full ">
          
               <Navbar/>

              <div  className="  items-center ">
                <HomePage /> 
              </div>

          </div>
        </Route>


        <Route path="/signup">
            <SignUp/>
            </Route>


        <Route path="/checkout">
        <div class="content w-full  mx-0  py-5 h-full ">
          <Navbar/>

            <Cart class='pt-10'/>
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
            <Notfound/>
          </Route>
          
          

        </Switch>
      </div>
  
    </Router>
    
  );
}  

export default App;
