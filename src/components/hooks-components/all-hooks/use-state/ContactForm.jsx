import React, { useState } from 'react';
import './State.css';

const ContactForm = () => {

    // 1st Method
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // Start 2nd Method
    const [contactDetail, setContactDetail] = useState({
        username:'',
        email:'',
        message:''
    })

    const handleInput = (event) => {
        const {name, value} = event.target;
        setContactDetail((prevValue)=>({...prevValue, [name]:value}))
        
    }

// End 2nd Method
   const handleSubmit = (e) => {
    e.preventDefault()
    // const contactData = {
    //     username:username, // key : value
    //     email:email, // key : value
    //     message:message // key : value
    // }
    setContactDetail('');
    console.log(contactDetail);
   } 
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <div className="main-form">
    <h1 className='p-2 rounded-full font-bold m-3 text-2xl tracking-wide' style={{backgroundColor:'seagreen', color:'#fff'}}>Contact Form</h1>
            <input type="text" placeholder='Enter Your Name' name='username' value={contactDetail.username || ''} onChange={handleInput}/>
            <input type="email" placeholder='Enter Your Email' name='email' value={contactDetail.email || ''} onChange={handleInput}/>
            <textarea type="text" rows={4} placeholder='Enter Your Message Here' name='message' value={contactDetail.message || ''} onChange={handleInput}/>
            <button type='submit'>Sign Up</button>
        </div>
    </form>
    </>
  )
}

export default ContactForm