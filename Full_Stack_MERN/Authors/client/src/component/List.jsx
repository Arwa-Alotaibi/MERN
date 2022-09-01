import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'


const List=(props)=>{
    const DeleteAuthor=(id)=>{
        axios.delete("http://localhost:8000/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
    return(
        <>
        <h1>Favorite Authors: </h1>
        <Link to='/new'>Add a new Author</Link>
        <h4>we have quotes by </h4>
                <table >
                    <tr>
                        <th>Author</th>
                        <th>avaliable action</th>
                    </tr>
                    {props.allAuthors.map((author,i) =>
                    <tr>
                <td key={i}>{author.name} </td>
                <td>
                <Link to={"/edit/"+author._id}>Edit</Link>
                <button onClick={()=>{DeleteAuthor(author._id)}}>Delete</button>
                </td>
                </tr>
                 )}
                </table>
            
    </>    
 
);
}
export default List;
