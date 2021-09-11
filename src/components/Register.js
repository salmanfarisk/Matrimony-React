import {useState, useEffect } from 'react';

 const Register = () =>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirm_password, setConfirmPassword] = useState(''); 

    const onRegister = async (e) =>{
        
        let request = {
          name: name,
          email : email,
          password :  password,
          password_confirmation : confirm_password,
        };
          
          
        let responce = await fetch('http://localhost/WayToNikKah/public/api/register',{
          method: "POST",
          headers: {
            "Content-type":"application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(request),
        });

        let decorded_responce = await responce.json();
        
        if(decorded_responce.status == true){
           localStorage.setItem('access_token',decorded_responce.access_token);
           console.log("success");
        }else{
          console.log(decorded_responce);
        }
        
    }
    return (
      <div>
      <h3 className='center-align'>Register</h3>
      <form>
          <div className='form-group'>
              <label for='name'>Name</label> 
              <input type='text' id='name' className='form-control' placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='form-group'>
              <label for='email'>Email</label> 
              <input type='text' id='email' className='form-control' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='form-group'>
              <label for='password'>Password</label>
              <input type='password' id='password' className='form-control' placeholder='Enter password' onChange ={(e) => setPassword(e.target.value)}/>
          </div>

          <div className='form-group'>
              <label for='confirm_password'>Confirm Password</label>
              <input type='password' id='confirm_password' className='form-control' placeholder='Enter Confirm password' onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>

          
          <input className='btn btn-primary' type='button' name='register' onClick={onRegister} value='Register'/>
         
      </form>
      
  </div>
    );
}


export default Register;