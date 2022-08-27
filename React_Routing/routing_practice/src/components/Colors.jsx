import React from "react";
import {useParams} from "react-router-dom";


const Colors=(props)=>{
    const {text , colorss , bc} = useParams();

    return (
        <>
        <h4 style={{color:colorss , backgroundColor:bc}}>The Word is : {text} </h4>
        </>
    )


}

export default Colors;
