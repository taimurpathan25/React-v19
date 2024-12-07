import React, { forwardRef, useId, useRef } from 'react';

const Forwardref = () => {
    document.title='Prop Drilling'

    const username = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }



  return (
    
    <div className='forwardRef'>
        <h1>ForwardRef using useRef Hook</h1> <br />
        <form onSubmit={handleSubmit}>
        {/* <BeforeReact19 label={"Username"} ref={username} heading={"Before React 19"}/>
        <BeforeReact19 label={"Password"} ref={password} /> */}
        <AfterReact19 label={"Username"} ref={username} heading={"After React 19"} />
        <AfterReact19 label={"Password"} ref={password} />
        <button type="submit" className='border-2 border-black mx-auto px-2 mt-2'>Submit</button>
    </form>
        </div>
  )
}

export default Forwardref;

// Before React 19
// const BeforeReact19 = forwardRef((props, ref) => {
//     const id = useId()
//     return(
//     <>
//         <h1>{props.heading}</h1> <br />
//         <label htmlFor={id}><b>{props.label} : </b></label>
//         <input type="text" name="" id="" ref={ref} placeholder='Enter your Username' className="border-2 border-black w-fit mx-auto px-2" /><br />
//     </>  
//     )  
// })


// After React 19
const AfterReact19 = (props) => { 
    const id = useId()
    return(
    <>
        <h1>{props.heading}</h1> <br />
        <label htmlFor={id}><b>{props.label} : </b></label>
        <input type="text" name="" id="" ref={props.ref} className="border-2 border-black w-fit mx-auto px-2 rounded-md" /><br />
    </>  
    )  
}
