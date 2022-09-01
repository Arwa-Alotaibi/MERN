import React, { useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const CreateAuthor=(props)=>{

    const[name, setname]= useState('')
    const history=useHistory();
    const[error, setError] = useState([])



    const onSubmitHandler=e=>{
        e.preventDefault();
        axios.post('http://localhost:8000/new',{
            name ,
        })
        .then(res=>history.push('/'))
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
        <h1>Favorite Authors </h1>
        <Link to='/'>Home</Link>

        <h1>Add a new author</h1>

        <form onSubmit={onSubmitHandler}>
        {error.map((error,i) => <p key={i}>{error}</p>)}

            <p>
                <label>Name:</label><br/>
                <input type="text" onChange={(e)=>setname(e.target.value)} value={name}/>
            </p>
            <input type="submit" value='create'/>
        </form>
        <Link to='/'><button>Cancel</button></Link>
        </>
    )
}

export default CreateAuthor;