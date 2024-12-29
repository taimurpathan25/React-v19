import React from 'react'

// Parent Component 
const EventWithProps = () => {
  
  const handleUser = (user) =>{
    confirm(`Hey ${user} You are Good Boy`);
    console.log("Clicking");
  }
  
  const handleHover = () => {
    alert('Hey You are Welcome!');
    console.log("Hovering");
  }
  
  return (
    <>
       <ChildComponent onClick={()=>handleUser('Pathan')} onMouseEnter={handleHover}/>
    </>
  )
}
export default EventWithProps;


// Child Component 
const ChildComponent = (props) => {
  
  const handleSize=()=>{
    console.log('Hello how are you');
  }
  return(
    <>
    <button onClick={props.onClick}>Click Me</button> <br />
    <button onMouseEnter={props.onMouseEnter}>Click Me</button><br />
    <button onClick={handleSize}>Click Me</button>
    </>
  )
}
