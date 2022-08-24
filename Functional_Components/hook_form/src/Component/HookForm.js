import React, { useState } from  'react';


const HookForm=(props)=>{
    const[FirstName,setFirstName]=useState("");
    const[LastName,setLastName]=useState("");
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const[ConfirmPassword ,setConfirmPassword]=useState("");

    const createuser=(event)=>{
        event.preventDefault();

        const newUser = { FirstName, LastName, Email,Password, ConfirmPassword};
        console.log("Hellp", newUser);

    }
    return(
        <><form Onsubmit={createuser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(event) => setFirstName(event.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(event) => setLastName(event.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(event) => setEmail(event.target.value)} />
            </div>

            <div>
                <label>Password: </label>
                <input type="text" onChange={(event) => setPassword(event.target.value)} />
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(event) => setConfirmPassword(event.target.value)} />
            </div>
        </form>
        
        <div >
            <h1>Your Form Data : </h1>
            <p>First Name :{FirstName} </p>

            <p>Last Name :{LastName} </p>

            <p>Email :{Email} </p>

            <p>Password :{Password} </p>

            <p>Confirm Password :{ConfirmPassword} </p>

            </div></>
        
    );


    
};

export default HookForm;