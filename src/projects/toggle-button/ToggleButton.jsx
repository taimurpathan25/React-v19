import React, { useState } from 'react';
import './ToggleButton.css';

export function ToggleButton() {
    const [isON,setIsON]=useState(false)

    const handleSwitch = () => {
        setIsON(!isON)
    }
  return (
    <div className='toggle-switch' style={{backgroundColor:isON ? 'green' : ''}} onClick={handleSwitch}>
        <div className={`toggle-btn ${isON ? 'on' : 'off'}`}>
            <span>{isON ? 'ON' : 'OFF'}</span>
        </div>
    </div>
  )
}
