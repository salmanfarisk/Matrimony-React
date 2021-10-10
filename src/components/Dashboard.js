
import '../css/dashbord.css';
import {BrowserRouter as Router, Link, Route , useHistory } from "react-router-dom";
import Home from './dashbord_componets/Home'
import Settings from './dashbord_componets/Settings'

const Dashboard = () =>{
   return(
     <div>
        <Router>
        <div class="sidenav">
            
            <Link to="/home" >Home</Link>
            <Link to="/actions" >Actions</Link>
            <Link to="/favoriete" >Favorites</Link>
            <Link to="/settings" >Settings</Link>
            <Link to="/plan" >Plan</Link>
            <Link to="/logout" >Logout</Link>
            
            
        </div>

      <div class="main">
         
         <Route path="/home" component={Home}/>
         <Route path="/actions" component={Home}/>
         <Route path="/favoriete" component={Home}/>
         <Route path="/settings" component={Settings}/>
         <Route path="/plan" component={Home}/>
      </div>
      </Router>

    </div>
   
   );
}


export default Dashboard;