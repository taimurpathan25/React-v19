import React, { createContext, useContext, useState } from 'react';



export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const handleToggleTheme = () => {
        return(
            setTheme((preValue) => {return preValue ==='dark' ? 'light' : 'dark'})
        )
    }
    
    return(
        <ThemeContext.Provider value={{theme, handleToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};



export const LightDark = () => {
    const {theme, handleToggleTheme} = useContext(ThemeContext)
  return (
    <div className={`p-4 flex flex-col justify-center items-center ${theme==='dark' ? 'bg-gray-800' : 'bg-white'}`}>
    <h1 className={`p-4 flex flex-col justify-center items-center ${theme==='dark' ? 'text-white' : ''}`}>Theme Context API ToggleSwitch</h1>
    <p className={`p-4 flex flex-col justify-center items-center ${theme==='dark' ? 'text-white' : ''}`}>Hello this is the Create Context Toggle Switch</p>
    <button className='bg-blue-500 hover:bg-blue-800 p-4 rounded-md text-white' onClick={handleToggleTheme}>{theme==='dark'?'Switch to Light Mode':'Switch to Dark Mode'}</button>
    </div>
  )
}