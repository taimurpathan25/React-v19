import React from 'react'
import './App.css'
import Card from './components/card-components/Card'
import Event from './components/event-components/Event'
import EventWithProps from './components/event-components/EventWithProps'
import State from './components/hooks-components/State'
import { StateWithObject } from './components/hooks-components/StateWithObject'
import { ToggleButton } from './projects/toggle-button/ToggleButton'

function App() {
 {/* Passing a Dynamimc Value */}
//  const title = 'Character Goes Desi';
//  const rating = '4.8 / 5';
//  const members = 'Nazim Ahmed, Wasim Ahmad, and Zyan';
 // End Passing a Dynamimc Value
  return (
    <>
    
{/* <Event/> */}
{/* <EventWithProps/> */}
{/* <State/> */}
{/* <StateWithObject/> */}
<ToggleButton/>
<Card/>
<br /><br /><br /><br /><br />

    {/* <img src="https://i.ytimg.com/vi/5KhZeWfiVRM/sddefault.jpg" alt="" />
      <h1>Title : {title}</h1>
      <h2>Rating : {rating}</h2>
      <h5>Round 2 Hell is a highly popular comedy group consisting of three talented members - {members} (Shahrukh Saifi). These young creators have amassed a massive following with their humorous and engaging content on YouTube and other digital platforms. Born in 1996, the trio shares the same age, currently 27 years old as of July 2023.</h5> */}
    {/* Passing a value for Props */}
    {/* <h2>Main Rolers :</h2>
    <PropComponent name='Zayn Saifi' age='25'/>
    <PropComponent name='Nazim Ahemd' age='26'/>
    <PropComponent name='Wasim Ahemd' age='27'/> */}
    {/* End Passing a value for Props */}
    </>
  )
}

const PropComponent = ({name,age}) =>{
return(
  <>
   <h4>Name : {name} , Age is {age}</h4>
      </>
) 
}


export default App
