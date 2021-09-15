import './App.css';
import {BrowserRouter as Router, Link, Route , useHistory } from "react-router-dom";
import Login from './components/Login'; 
import Register from './components/Register';
import {useEffect} from 'react';
import Dashboard from './components/Dashboard';

function App() {
   
    // if(localStorage.getItem('access_token')){
    //   const history = useHistory();
    //   history.push("/path");
    // }
  
  useEffect(() => {
    document.body.className = 'body';
    
  }, []);


  
  return (
    <div className='container-fluid bg'>
    <Router>
      

       <div className='row justify-content-center'>
         <Route path="/login"><Login /></Route>
         <Route path="/register"><Register /></Route>
         <Route path="/home"><Dashboard /></Route>
         {/* <div className=''>
            <Route path="/login">  <label>Not Registered? <Link to="/register">Register</Link></label></Route>
            <Route path="/register">  <label>Already Registered? <Link to="/login">Login</Link></label></Route>
         </div> */}
       </div>

      
      </Router>

      </div>
  
     
   


  );
}

export default App;
