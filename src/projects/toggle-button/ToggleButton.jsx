import React, { useState } from 'react';
import './ToggleButton.css';

export function ToggleButton({onToggle, isDarkMode}) {
    // const [isON,setIsON]=useState(false)

    // const handleSwitch = () => {
    //     setIsON(!isON)
    // }
  return (
    <div className='toggle-switch' style={{backgroundColor:isDarkMode ? '#ccc' : ''}} onClick={onToggle}>
        <div className={`toggle-btn ${isDarkMode  ? 'on' : 'off'}`}>
            <span>{isDarkMode  ? 'light' : 'dark'}</span>
        </div>
    </div>
  )
}
