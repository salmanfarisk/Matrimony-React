
import Home from './dashbord_componets/Home'
const Dashboard = () =>{
   return(
     <div>
         <nav className="navbar navbar-expand d-flex flex-coulmn align-item-start" id="sidebar">
           <a href="#" className="navbar-brand text-ligth mt-5">
             <div className="display-5 font-wight-bold ">Thanks</div>
           </a>
           <ul className="navbar-nav d-flex mt-5 w-1000">
             <li className="nav-item  w-100">
               <a href="#" className="nav-link text-ligth pl-4">Home</a>
             </li>
           </ul>
         </nav>
     </div>
   
   );
}


export default Dashboard;