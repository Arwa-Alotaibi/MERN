import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'


const Update=()=>{
    const[name, setname]= useState('')
    const history = useHistory();
    const {id} = useParams();
    const[error, setError] = useState([])


    useEffect( ()=>   {
        axios.get("http://localhost:8000/"+id)
        .then(res => {setname(res.data.name) 

        
        })
        .catch(err => console.error(err))
    },[id])
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/edit/'+id, {
            name
        })
            .then(res=> history.push("/"))
            .catch(err=> {
                console.log(err.response.data.errors)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })      }
    return (

        <form onSubmit={onSubmitHandler}>
                    {error.map((error,i) => <p key={i}>{error}</p>)}

            <p>
                <label>Name:</label><br/>
                <input type="text" onChange={(e)=>setname(e.target.value)} value={name}/>
            </p>
            <input type="submit" value='create'/>
        </form>
        
    )
}

export default Update;