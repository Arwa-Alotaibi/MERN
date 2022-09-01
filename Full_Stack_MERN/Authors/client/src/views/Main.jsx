import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'


import List from '../component/List'

const Main = () =>{
    const [allAuthors, setallAuthors] = useState([])
    useEffect( ()=>   {
        axios.get("http://localhost:8000/")
        .then(res => setallAuthors(res.data))
        .catch(err => console.error(err))
    },[allAuthors])

    return (
        <>
        <List allAuthors={allAuthors} />
        </>
    );
}
export default Main;