import React, { useState } from 'react'
import axios from 'axios';

const CreateProduct=(props)=>{

    const[title , settitle]= useState('');
    const[price ,setprice]= useState();
    const[description, setdescription]= useState('')


    const onSubmitHandler=e=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new',{
            title ,price, description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <>
        <h1>Product Manager </h1>
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
        </>
    )
}

export default CreateProduct;