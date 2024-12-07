import React, { useContext } from 'react'
import { BioContext, useBioContext } from './Index';

const Services = () => {
    // const {name,age} = useContext(BioContext);
    const {name,age} = useBioContext();
  return (
    <h1>Hello this is Context API This is <b>Services Page</b>, My name is {name} and My Age is {age}</h1>
  )
}

export default Services;