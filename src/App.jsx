import React, { useState } from 'react'
import './App.css'
import Card from './components/card-components/Card'
import Event from './components/event-components/Event'
import EventWithProps from './components/event-components/EventWithProps'
import State from './components/hooks-components/State'
import { StateWithObject } from './components/hooks-components/StateWithObject'
import { ToggleButton } from './projects/toggle-button/ToggleButton'
import Todo from './projects/todo-app/Todo'
import ShortCircuitEvalutaion from './projects/short-circuit-evaluation/ShortCircuitEvalutaion'
import UseState from './components/hooks-components/all-hooks/use-state/UseState'
import RegistrationForm from './components/hooks-components/all-hooks/use-state/RegistrationForm'
import RegistrationReactFormHandling from './components/hooks-components/all-hooks/use-state/RegistrationReactFormHandling'
import LoginForm from './components/hooks-components/all-hooks/use-state/LoginForm'
import ContactForm from './components/hooks-components/all-hooks/use-state/ContactForm'
import UseEffect from './components/hooks-components/all-hooks/use-effect/UseEffect'
import UseEffectCleanup from './components/hooks-components/all-hooks/use-effect/UseEffectCleanup'
import HowNotToFetchApi from './components/hooks-components/all-hooks/use-effect/HowNotToFetchApi'
import UseRef from './components/hooks-components/all-hooks/use-ref/UseRef'
import Forwardref from './components/hooks-components/all-hooks/use-ref/Forwardref'
import UseId from './components/hooks-components/all-hooks/use-id/UseId'
import PropDrilling from './components/PropDrilling'
import { BioProvider } from './components/hooks-components/all-hooks/context-api/Index'
import Home from './components/hooks-components/all-hooks/context-api/Home'
import About from './components/hooks-components/all-hooks/context-api/About'
import Services from './components/hooks-components/all-hooks/context-api/Services'
import { LightDark, ThemeProvider } from './components/hooks-components/all-hooks/context-api/LightDark'
import UseReducer from './components/hooks-components/all-hooks/use-reducer/UseReducer'
import UseMemo from './components/hooks-components/all-hooks/use-memo/UseMemo'

function App() {

  // START TOGGLE BUTTON 
const [isDarkMode, setIsDarkMode] = useState(false)
 // function for Toggle the dark/light mode
 function handleToggle(){
  setIsDarkMode(!isDarkMode);
 }
//  End
  // END TOGGLE BUTTON '

 {/* Passing a Dynamimc Value */}
//  const title = 'Character Goes Desi';
//  const rating = '4.8 / 5';
//  const members = 'Nazim Ahmed, Wasim Ahmad, and Zyan';
 // End Passing a Dynamimc Value
  return (
    <>
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
{/* <Event/> */}
{/* <EventWithProps/> */}
{/* <State/> */}
{/* <StateWithObject/> */}
{/* <ShortCircuitEvalutaion/> */}
<ToggleButton onToggle={handleToggle} isDarkMode={isDarkMode}/>
{/* <Todo/> */}
{/* <Card /> */}

{/* USE STATE HOOKS */}
{/* <RegistrationForm/> */}
{/* <RegistrationReactFormHandling/> */}
{/* <LoginForm/> */}
{/* <ContactForm/> */}
{/* <UseState/> */}
{/* END */}

{/* USE EFFECT HOOKS */}
{/* <UseEffect/> */}
{/* <UseEffectCleanup/> */}
{/* <HowNotToFetchApi/> */}
{/* <UseRef/> */}
{/* <Forwardref/> */}
{/* <UseId/> */}
{/* <PropDrilling/> */}
{/* <Index/> */}
{/* <BioProvider>
  <Home/>
  <About/>
  <Services/>
  </BioProvider> */}
  {/* <ThemeProvider>
  <LightDark />
  </ThemeProvider> */}
  {/* <UseReducer/> */}
  <UseMemo/>
{/* END */}




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
    </div>
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
