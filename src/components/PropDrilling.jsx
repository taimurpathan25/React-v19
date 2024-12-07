import React from 'react'

const ParentComponent = () => {
    document.title='Prop Drilling';
  return (
    <div className="parent-component">
        <h1>Parent Component</h1>
        <ChildComponent data="Disadvantage of React VS 19"/>
        
    </div>
  )
}

export default ParentComponent;

const ChildComponent = (props) => {
    return (
        <>
       <h1>Child Component</h1>
        <GrandChildComponent data={props.data}/>
        </>
        )
}

const GrandChildComponent = (props) => {
    return (
        <>
       <h1>Grand Child Component</h1>
       <GrandGrandChildComponent data={props.data}/>
        </>
    )
}

const GrandGrandChildComponent = (props) => {
    return (
        <h1><b>Get Data From Parent :-</b> Hello this is the {props.data}, is called Prop Drilling</h1>
    )
}