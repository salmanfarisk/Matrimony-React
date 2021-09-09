
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from './components/Login'; 
import Register from './components/Register';


function App() {
  return (
    <div className='header'>
      
      <Router>
      <div className='container'>
      <Route path="/login"><Login /></Route>
      <Route path="/register"><Register /></Route>
      
      <div>
            <Route path="/login">  <label>Not Registered? <Link to="/register">Register</Link></label></Route>
             <Route path="/register">  <label>Already Registered? <Link to="/login">Login</Link></label></Route>
       </div>
        
      </div>

      </Router>

        
    </div>


  );
}

export default App;
