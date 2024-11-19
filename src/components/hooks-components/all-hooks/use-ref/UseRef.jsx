import React, { useRef } from 'react'

const UseRef = () => {

    // const username = document.getElementById('username');
    // const password = document.getElementById('password');
    
    const username = useRef(null);
    const password = useRef(null);
    
    // const username = useRef(null)
    // const password = useRef(null)
    
    const handleSubmitForm = (event) => {
        event.preventDefault();
        // console.log(username.value, password.value);
        console.log(username.current.value, password.current.value)
    }
  return (
    <>
    <form onSubmit={handleSubmitForm}>
        <div className="border-2 border-black w-fit mx-auto px-2">
        <input type="text" id='username' placeholder='Enter your Name' ref={username} autoComplete='off' />
        </div>
        <br />
        <div className="border-2 border-black w-fit mx-auto px-2">
        <input type="password" id='password' placeholder='Enter your Password' ref={password} autoComplete='off'/>
        </div>
        <br />
        <button type='submit' className='border-2 border-black mx-auto px-2'>Submit</button>
    </form>
    </>
  )
}

export default UseRef