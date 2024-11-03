import React, { useState } from 'react';
import './Todo.css';
import { MdDelete, MdCheck } from "react-icons/md";



const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [task,setTask] = useState([]);
    const [dateTime ,setDateTime] = useState(''); // State For Date Time

    //getting value by user input
    const handleInputValue = (event) => {
setInputValue(event.target.value);
}

 // Handling Form for Submitted
    const handleFormSubmit = (event) => {
        event.preventDefault();

    if(!inputValue) return 0;
    if(task.includes(inputValue)) 
    {setInputValue('')
        return 0;
    }
    setTask((previous)=>[...previous,inputValue]);
    setInputValue('');
    }

    //Start Time and Date
    // const now = new Date();
    // const formatDate = now.toLocaleDateString()
    // const formatTime = now.toLocaleTimeString()

    setInterval(() => {
        const now = new Date();
    const formatDate = now.toLocaleDateString()
    const formatTime = now.toLocaleTimeString()
    setDateTime(`${formatDate} -- ${formatTime}`)
    }, 1000);
//End Time and Date
    

    //Start Delete the List of Todo
    const handleDeleteTodoList = (value) => {
        console.log(task)
        console.log(value)
        const updatedTask = task.filter((tasks) => tasks !== value );
        setTask(updatedTask);
    }
    //End Delete the List of Todo

    //Start Delete All the List of Todo
    const handleClearAll = () => {
        setTask([]);
    }
    //End Delete All the List of Todo



  return (
<>
        <h1 className='text-3xl font-bold'>TODO LIST</h1>
        <h2 className='p-2 bg-red-400 w-60 mx-auto my-2 rounded-md font-bold text-fuchsia-950'>{dateTime}</h2>
    <div className='todo-list'>
            <form onSubmit={handleFormSubmit}>
        <div className="input-todo">
            <input 
            type="text" 
            placeholder='Type Here Task and Add' 
            autoComplete='off' 
            value={inputValue} 
            onChange={handleInputValue}/>
        </div>
        <div className="add-btn">
            <button type='submit'>Add Task</button>
        </div>
        </form>

    </div>
        <ul className='mt-5'>
            {task.map((tasks,index)=>{
                return(
                <div key={index} className='flex justify-between todo-items'>
                    <div className="lists">
                    <span>{tasks}</span>
                    </div>
                    <div className="buttons">
                    <button className='mdCheck'><MdCheck/></button>
                    <button className='mdDelete' onClick={()=>handleDeleteTodoList(tasks)}><MdDelete/></button>
                    </div>
                    </div>

            )})}
        </ul>
              <button onClick={handleClearAll} className='bg-red-500 text-white px-2 py-1 rounded-md'>Clear All</button>
        </>
  )
}

export default Todo