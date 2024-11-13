import React, { useState } from 'react'
import { useEffect } from 'react';
import './UseEffect.css';

const HowNotToFetchApi = () => {

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    // using Fetch data normal
    // const pokemonData = () => {
    //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setPokemon(data)
    //         setLoading(false)
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //         setLoading(false)
    //         setError(err)
    //     })
    // }

    // using fetch data using by asyn func
    const pokemonData = async() => {
        try {
           const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
           const data = await res.json();
           setPokemon(data);
           setLoading('')
        } catch (err) {
            console.log(err);
            setError(err);
            setLoading('')
        }
    }
    console.log(pokemon)

    useEffect(()=>{
        pokemonData();
    },[])
    


    if (loading)
        return(
    <h1>Loading....</h1>
    )

    if (error)
        return(
    <h1>Error: {error.message}</h1>
    )
    // if(pokemon){
  return (
    <>
       <div className="heading">
        <h1 className=''>Let's Catch the Pakemons</h1> 
       </div>
       <div className="main-section grid grid-cols-3">
    <div className="pokemon-card ">
        <div className="child-div"></div>
        <figure>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        </figure>
        <h1 className='text-8xl'>{pokemon.name}</h1>
        <div className="pokemon-details">
        <div className="pokemon-paragraph">
            <span><b>Height</b> : {pokemon.height}</span>
        </div>
        <div className="pokemon-paragraph">
            <span><b>Weight</b> : {pokemon.weight}</span>
        </div>
        <div className="pokemon-paragraph">
            <span><b>Speed</b> : {pokemon.stats[5].base_stat}</span>
        </div>
        </div>
    </div>
    </div>
    </>
  )
// }
}

export default HowNotToFetchApi