import React, { useMemo, useState } from 'react'

const MemoChildComponent = () => {
    document.title = 'UseMemo Hook';

        const  calculation = () => { //Component Function
            console.log("Calculating.....");
           
        for (let i = 0; i <= 100245; i++) {
            var calculate = i + 1;
        }
        return calculate;
        }


        // const total = calculation();
        const total = useMemo(() => calculation(), [])
        return <p>The Calculation is : {total}</p>
}



    const UseMemo = () => {
        const [count, setCount] = useState(0);
        return(
            <>
            <h1>Hello</h1>
            <MemoChildComponent/>
            <button onClick={()=>{setCount(count+1)}} className='bg-slate-600 p-1 px-4 mx-2 mt-10 rounded-md text-white'>Incrementation</button>
            <p>Parent Re-rendering {count}</p>
            </>
        )
}

export default UseMemo;
