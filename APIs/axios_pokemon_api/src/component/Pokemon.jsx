import axios from 'axios';

import React, {  useState } from 'react';

const Pokemon=()=>{
    const [Allpokemon, setpokemon] = useState([]);

    const FetchPokemon=()=>{
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response=>{
                setpokemon(response.data.results)
            
            });
    

    }


    
    return(
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

export default Pokemon;

