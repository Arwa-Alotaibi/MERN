import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

const ProductList=(props)=>{
    //console.log(props.Allproducts)

    const DeleteProduct=(id)=>{
        axios.delete("http://localhost:8000/api/Allproducts/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }


    
    return(
        <>
        <h1>All Product: </h1>
        {props.Allproducts.map((productt,i) =>{
            return (
                <>
                <Link to={"/products/"+productt._id}><p key={i}>{productt.title} </p></Link>
                <Link to={"/edit/"+productt._id}>Edit</Link>

                <button onClick={()=>{DeleteProduct(productt._id)}}>Delete</button>
                </>
            )
        })
    }
    </>
);
}
export default ProductList;