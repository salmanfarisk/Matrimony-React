import React,{useState} from 'react'


const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onLogin = async(e) =>{
         let request = {
           email: email,
           password: password,
         };

         let responce = await fetch('http://localhost/WayToNikKah/public/api/login',{
          method: "POST",
          headers: {
            "Content-type":"application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(request),
        });

        let decorded_responce = await responce.json();
        
        if(decorded_responce.status === true){
           localStorage.setItem('access_token',decorded_responce.access_token);
           console.log("success");
        }else{
          console.log(decorded_responce);
        }
    };
    return (
        <div>
            <div class="card-header">
             Featured
            </div>
            <form>
                <div className='form-outline mb-4'>
                    <label for='email'>Email</label>
                    <input type='text' className='form-control' id='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/>
                </div>
                <div className='form-outline mb-4'>
                    <label for='password'>Password</label>
                    <input type='password' className='form-control' id='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/>
                </div>

                
                <input className='btn btn-primary btn-block' type='button' name='login' onClick={onLogin} value='Login'/>
                
            </form>
            
        </div>
    )
}

export default Login;
