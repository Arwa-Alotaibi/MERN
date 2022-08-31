import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import CreateProduct from '../component/CreateProduct'
import ProductList from '../component/ProductList'
const Main = () =>{
    const [Allproducts, setproducts] = useState([])
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/Allproducts")
        .then(res => setproducts(res.data))
        .catch(err => console.error(err))
    },[Allproducts])

    return (
        <>
        <CreateProduct />
        <ProductList Allproducts={Allproducts} />
        </>
    );
}
export default Main;