import React, { useState } from 'react';
import './State.css';

const RegistrationForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');


    
    const handleInputValue = (event) => {
       const {name,value} = event.target;

       switch (name) {
        case 'firstName':
            setFirstName(value)
            break;
        case 'lastName':
            setLastName(value)
            break;
        case 'email':
            setEmail(value)
            break;
        case 'password':
            setPassword(value)
            break;
        case 'phone':
            setPhone(value)
            break;
       
       }
    }


   const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
        firstName:firstName,
        lastName : lastName,
        email:email,
        password:password,
        phone:phone
    }
    console.log(formData);
   } 
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <div className="main-form">
    <h1 className='p-2 rounded-full font-bold m-3 text-2xl tracking-wide' style={{backgroundColor:'#e500ffa6'}}>Registration Form</h1>
            <input type="text" placeholder='Enter Your First Name' name='firstName' value={firstName} onChange={handleInputValue}/>
            <input type="text" placeholder='Enter Your Last Name' name='lastName' value={lastName} onChange={handleInputValue}/>
            <input type="email" placeholder='Enter Your Email Address' name='email' value={email} onChange={handleInputValue}/>
            <input type="password" placeholder='Enter Your Password' name='password' value={password} onChange={handleInputValue}/>
            <input type="tel" placeholder='Enter Your Phone Number' name='phone' value={phone} onChange={handleInputValue}/>
            <button type='submit'>Sign Up</button>
        </div>
    </form>
    </>
  )
}

export default RegistrationForm;