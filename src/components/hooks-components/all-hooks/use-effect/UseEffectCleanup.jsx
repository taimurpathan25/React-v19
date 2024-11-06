import React, { useEffect, useState } from 'react';
import './UseEffect.css';

const UseEffectCleanup = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
    const timer = setInterval(() => {
        setCount((count) => count+1);
    }, 1000);

    return () => clearInterval(timer);
},[])
    
  return (
    <>
    <div className="main-counter">
        <h1>Real Time Counter</h1>
        <span>{count}</span>
        <p>Built by Pathan Coding</p>
    </div>
    </>
  )
}

export default UseEffectCleanup