import React, { useState } from 'react';
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

const UseState = () => {
    const [count,setCount] = useState(0);
    const [step, setStep] = useState(0);
  return (
    <>
    <h1 className='font-bold text-2xl'>Counter</h1>

    <input type="number" placeholder='Number of Steps' value={step} onChange={(e)=>setStep(Number(e.target.value))} className='border-black border-2 px-2'/>
<p className='text-3xl text-green-700 font-bold'>{count}</p>
<div className="flex justify-center gap-4">
    <button className='px-4 py-2 rounded-md bg-slate-500 text-white flex items-center gap-2' onClick={()=>setCount(count+step)} disabled={count>=100}><FaAngleDoubleUp/>Incr</button>
    <button className='px-4 py-2 rounded-md bg-slate-500 text-white flex items-center gap-2' onClick={()=>setCount(count-step)} disabled={count<=0}><FaAngleDoubleDown/>Decr</button>
    <button className='px-4 py-2 rounded-md bg-slate-500 text-white flex items-center gap-2' onClick={()=>setCount(0)}>All Reset</button>
    </div>
    </>
  )
}

export default UseState