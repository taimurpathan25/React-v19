import React, { useState } from 'react';
import './State.css';

const RegistrationReactFormHandling = () => {

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        phone:'',


    });


    
    const handleInputValue = (event) => {
       const {name,value} = event.target;
       setUser((prev)=>({...prev, [name]:value}))
    }


   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
   } 
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <div className="main-form">
    <h1 className='p-2 rounded-full font-bold m-3 text-2xl tracking-wide' style={{backgroundColor:'#e500ffa6'}}>Registration Form</h1>
            <input type="text" placeholder='Enter Your First Name' name='firstName' value={user.firstName} onChange={handleInputValue}/>
            <input type="text" placeholder='Enter Your Last Name' name='lastName' value={user.lastName} onChange={handleInputValue}/>
            <input type="email" placeholder='Enter Your Email Address' name='email' value={user.email} onChange={handleInputValue}/>
            <input type="password" placeholder='Enter Your Password' name='password' value={user.password} onChange={handleInputValue}/>
            <input type="tel" placeholder='Enter Your Phone Number' name='phone' value={user.phone} onChange={handleInputValue}/>
            <button type='submit'>Sign Up</button>
        </div>
    </form>
    </>
  )
}

export default RegistrationReactFormHandling;