import React, { useState } from 'react'

const ShortCircuitEvalutaion = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState('')
  return (
    <>
    <h1 className='font-bold text-4xl'>Welcome to the Short Circuit Evalutaion</h1>

    {isLogin && <p className='font-bold text-2xl'>You are Logged in</p>}
    {user ? `${user}` : 'Please Logged in'}

<div className="flex justify-center gap-5">
    <button className='border-2 border-black px-2 py-1 mt-10' onClick={()=>setIsLogin(!isLogin)}>Toggle Login State</button>
    <button className='border-2 border-black px-2 py-1 mt-10' onClick={()=>setUser('Pathan Coding')}>Set User</button>
    <button className='border-2 border-black px-2 py-1 mt-10'onClick={()=>setUser('')}>Clear User</button>
    </div>
    </>
  )
}

export default ShortCircuitEvalutaion