import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Detail = () => {
    const [productt, setproductt] = useState({})
    const {id} = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/Allproducts/'+id)
            .then(res => setproductt(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <h1> {productt.title}</h1>
            <p>price $: {productt.price} </p>
            <p>Decription : {productt.description}</p>
        </div>
    )
}
    
export default Detail;

