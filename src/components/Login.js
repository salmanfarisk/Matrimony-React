import React from 'react'

const Login = () =>{
    return (
        <div>
            <h3 className='center-align'>Login</h3>
            <form>
                <div className='form-outline mb-4'>
                    <label for='email'>Email</label>
                    <input type='text' class='form-control' id='email' placeholder='Enter email'/>
                </div>
                <div className='form-outline mb-4'>
                    <label for='password'>Password</label>
                    <input type='password' class='form-control' id='password' placeholder='Enter password'/>
                </div>

                
                <input className='btn btn-primary btn-block' type='button' name='login' value='Login'/>
                
            </form>
            
        </div>
    )
}

export default Login;
