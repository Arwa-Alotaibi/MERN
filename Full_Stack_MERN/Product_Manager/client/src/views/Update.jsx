import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'


const Update=()=>{
    const[title , settitle]= useState('');
    const[price ,setprice]= useState();
    const[description, setdescription]= useState('')
    const history = useHistory();
    const {id} = useParams();

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/ALLproducts/"+id)
        .then(res => {settitle(res.data.title) 
                    setprice(res.data.price)
                    setdescription(res.data.description)
        
        })
        .catch(err => console.error(err))
    },[id])
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/ALLproducts/update/'+id, {
            title ,price, description
        })
            .then()
            .catch(err=>console.log(err))
            history.push("/Allproducts")
    }
    return (

        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title </label><br/>
                <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}/>
            </p>

            <p>
                <label>price </label><br/>
                <input type="text" onChange={(e)=>setprice(e.target.value)} value={price}/>
            </p>


            <p>
                <label>description</label><br/>
                <input type="text" onChange={(e)=>setdescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" value='create'/>
        </form>
        
    )
}

export default Update;
