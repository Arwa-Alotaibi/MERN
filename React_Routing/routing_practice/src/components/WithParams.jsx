import React from "react";
import {useParams} from "react-router-dom";


const WithParams=(props)=>{
    const{display} = useParams();

    return(

        <>
            {
            isNaN(display)?
            <h4> The Word is :  { display }</h4>:
            <h4>The Number is : {display}</h4>
            }

        </>
    )
}

export default WithParams;