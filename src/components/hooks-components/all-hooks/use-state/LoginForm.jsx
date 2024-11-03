import React, { useState } from 'react'

const LoginForm = () => {
    // defining the state hooks 
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // form Submitting Function 
    const handleSubmit = (event) => {
        event.preventDefault();
        const loginData = {
            username,
            password
        }
        setUserName('');
        setPassword('');
        console.log(loginData)
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <div className="main-form">
    <h1 className='p-2 rounded-full font-bold m-3 text-2xl tracking-wide' style={{backgroundColor:'#e500ffa6'}}>Login Form</h1>
            <input type="text" placeholder='Enter Your User Name' name='username' value={username} onChange={(e)=>setUserName(e.target.value)} autoComplete='off'/>
            <input type="password" placeholder='Enter Your Current Password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='off'/>
            <button type='submit'>Sign Up</button>
        </div>
    </form>
    </>
  )
}

export default LoginForm