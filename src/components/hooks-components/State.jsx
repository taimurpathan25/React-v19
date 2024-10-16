import React, { useState } from 'react'

const State = () => {
    console.log('Parent Component');
    const [count, setCount] = useState(0);

    const handleChange =()=>{
        setCount(()=>count+1);
    }
    // console.log(count);
  return (
    <>
    <h1 className='text-green-500 text-4xl'>{count}</h1>
    <button className='border-2 border-green-300 px-3 py-1 text-green-600 font-bold' onClick={handleChange}>Increment</button>
    <ChildComponent/>
    </>
  )
}

export default State;

const ChildComponent=()=>{
    console.log('Child Component');
return(
    <h1>Child Component</h1>
)
}

