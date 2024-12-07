import React, { useContext } from 'react'
import { BioContext, useBioContext } from './Index';

const Home = () => {
    // const {name,age} = useContext(BioContext);
    const {name,age} = useBioContext();// custom hook
  return (
    <h1>Hello this is Context API This is <b>Home Page</b>, My Name is {name} and My Age is {age}</h1>
  )
}

export default Home;