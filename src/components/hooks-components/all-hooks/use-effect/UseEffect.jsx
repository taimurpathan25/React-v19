import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [count, setCount] = useState(0);
const [name,setName] = useState('Pathan');

useEffect(() => {
  document.title = `Count : ${count}`
}, [count])


  return (
    <>
    <div className="challenge">
    <div className="counter flex flex-col">
        <span>{count}</span>
        <button 
        className='border-4 px-2 py-1 w-20 mx-auto rounded-md'
        onClick={()=>{setCount(count+1)}}
        >Counter</button>
    </div>
    <div className="input-type-value flex flex-col mt-5">
        <span>name : {name}</span>
        <input 
        type="text" 
        placeholder='type here value' 
        name="" 
        id="" 
        style={{width:'20%',margin:'0 auto',border:'1px solid',borderRadius:'5px', paddingLeft:'10px'}}
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button 
        className='border-4 px-2 py-1 w-20 mx-auto rounded-md'
        onClick={() => {setName('')}}
        >Reset</button>
    </div>
    </div>
    </>
  )
}

export default UseEffect