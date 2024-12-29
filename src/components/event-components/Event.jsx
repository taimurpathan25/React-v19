import React from 'react'

const Event = () => {

    // const eventButtonClick=()=>{
    //     alert('After Clicked, Msg is Successfully Submited')
    // }
    const eventButtonClick=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.type) //click
        alert('After Clicked, Msg is Successfully Submited')
    }
    const argumentClick=(user)=>{
        alert(`Hey Mr. ${user} your form is successfully Submitted`)
    }
    
    const btnEventStyle = {
        color:'#000',
        fontWeight:'800',
        backgroundColor:'#ccc',
        padding:'5px 15px',
        borderRadius:'5px',
        fontSize:'1.2rem',
        margin:'10px'
    }
  return (
  <>
    {/* Function Component with Named Function  */}
    <button style={btnEventStyle} onClick={eventButtonClick}>Click Func Name</button>
    <button style={btnEventStyle} onClick={(event)=>{eventButtonClick(event)}}>Click Func Name 2</button>
    {/* End */}

    {/* Function Component with Inline Function */}
    <button style={btnEventStyle} onClick={(event)=>console.log(event)}>Click with Inline Func</button>
    {/* End */}

    {/* Function Component with Inline Arrow Function */}
    <button style={btnEventStyle} onClick={()=>alert('hey this is inline arrow func')}>Click with Inline Arrow Func</button>
    {/* End */}

    {/* Function Component with Inline Arrow Function */}
    <button style={btnEventStyle} onClick={()=>{argumentClick('Pathan')}}>Click with Pass Argument Func</button>
    {/* End */}
    </>
    )
}

export default Event