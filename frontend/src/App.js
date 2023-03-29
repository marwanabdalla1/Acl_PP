import './index.css';
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './Blogdetails';
import Notfound from './Notfound';



// How do i connet react to node js application




function App() {
 // const title = 'Welcome to the blog'
  const link = "www.google.com"
  
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "/create">
            <Create/>
          </Route>
          <Route path = "/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path = "*">
            <Notfound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}  

export default App;
