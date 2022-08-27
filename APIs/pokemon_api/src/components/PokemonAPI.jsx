import { useState } from "react";


const PokemonAPI=()=>{
    const [Allpokemon,setpokemon]=useState([]);


    const FetchPokemon=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => response.json())
        .then(response => setpokemon(response.results));

    }

    return (
        <div>
            <button onClick={FetchPokemon}>Fetch Pokemon</button>
            <ul>
            {Allpokemon.map((Allpokemon, index)=>{
                return (<li key={index}>{Allpokemon.name} </li>)
            })}
        </ul>
        </div>
        
    );






}


export default PokemonAPI;
