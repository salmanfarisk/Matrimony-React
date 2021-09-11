
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from './components/Login'; 
import Register from './components/Register';
import {useEffect} from 'react';


function App() {

  useEffect(() => {
    document.body.className = 'body';
  }, []);


  
  return (
    <div>
    
    <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      
      <Router>
      <div className='card'>

      <div className='card-body'>
        
         <Route path="/login"><Login /></Route>
         <Route path="/register"><Register /></Route>
         <div className=''>
            <Route path="/login">  <label>Not Registered? <Link to="/register">Register</Link></label></Route>
            <Route path="/register">  <label>Already Registered? <Link to="/login">Login</Link></label></Route>
         </div>


      </div>

      </div>

      </Router>

      </div> 
   


  );
}

export default App;
