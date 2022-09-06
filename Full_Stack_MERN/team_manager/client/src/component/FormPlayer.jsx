import React, { useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const FormPlayer=()=>{
    const[PlayerName, setPlayerName]= useState('');

    const[PreferredPosition, setPreferredPosition]= useState('');

    allGames[{status:'Undecided'} , {status:'Not Playing'} , {status:'Playing'}]

    const[error, setError] = useState([])

    const history=useHistory();


    const onSubmitHandler=e=>{
        e.preventDefault();
        axios.post('http://localhost:8000/addplayer',{
            PlayerName , PreferredPosition 
        })

        .then(res=>history.push('/players/list'))
        .catch(err=> {
            const errorObj = err.response.data.errors
            let errArr = []
            for (const key of Object.keys(errorObj)){
                errArr.push(errorObj[key].message)
            }
            setError(errArr)
        })    }


        return (
            <>
            <h1> <Link to='/'>  Manage Players </Link> |   <Link to='/'>  Manage Player Status </Link>  </h1>
            
            <h1> List  |   Add Player  </h1>
            <h1>Add Player </h1>

            
        <form onSubmit={onSubmitHandler}>
        {error.map((error,i) => <p key={i}>{error}</p>)}

            <p>
                <label>Player Name:</label><br/>
                <input type="text" onChange={(e)=>setPlayerName(e.target.value)} value={PlayerName}/>
            </p>

            <p>
                <label>Preferred Position:</label><br/>
                <input type="text" onChange={(e)=>setPreferredPosition(e.target.value)} value={PreferredPosition}/>
            </p>
            <input type="submit" value='create'/>
        </form>
            </>
        )


    }

