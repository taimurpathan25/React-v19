import React, { useReducer } from 'react'
import '../../../../App.css';




const reducer = (state, action) => {
    
    console.log(state,action)

    // using IFELSE STATEMENT
    // if (action.type==='increment') {
    //     return (
    //         state+1
    //     )
    // }
    // if (action.type==='decrement') {
    //     return (
    //         state-1
    //     )
    // }
    // if(action.type==='reset'){
    //     return(
    //         state=0
    //     )
    // }

    // Using Switch Statement
    switch (action.type) {
        case 'name':
        return {
            // ...state,
            name:action.changeName,
            age:state.age,
            designation:state.designation
            
        };
        case 'age':
        return {
            // ...state,
            name:state.name,
            age:state.age+1,
            designation:state.designation
        };
        case 'designation':
        return {
            // ...state,
            name:state.name,
            age:state.age,
            designation:action.changeDesignation
        };
        default:
            return state;
    }
}

const initialState = {name:'Taimur Pathan', age:24, designation:'Software Developer'}

const UseReducer = () => {
const [state, dispatch] = useReducer(reducer,initialState);
console.log(useReducer(reducer,0))

const handleName = (e) => {
    dispatch({type:"name" , changeName:e.target.value})
}
const handleAge = () => {
    dispatch({type:"age"})
}
const handleDesignation = (e) => {
    dispatch({type:"designation" , changeDesignation:e.target.value})
}
  return (
    <>
    <h1 className='text-2xl font-bold text-orange-900'>Hello my Name is {state.name} and i am {state.age} year old and i also am a {state.designation}</h1>
    {/* <button onClick={handleName} className='bg-slate-600 p-2 px-4 mx-2 mt-10 rounded-md text-white'>INCREMENT</button>
    <button onClick={handleAge} className='bg-slate-600 p-2 px-4 mx-2 mt-10 rounded-md text-white'>DECREMENT</button><br />
    <button onClick={handleDesignation} className='bg-slate-600 p-2 px-4 mx-2 mt-10 rounded-md text-white'>RESET</button> */}
    <input type="text" onChange={handleName} className='input-field' value={state.name}/>
    <button onClick={handleAge} className='bg-slate-600 p-1 px-4 mx-2 mt-10 rounded-md text-white'>Modify Age</button>
    <input type="text" onChange={handleDesignation} className='input-field' value={state.designation}/>
    </>
  )
}
 
export default UseReducer