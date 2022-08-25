import React, { useState } from  'react';

const MoreeForms=(props)=>{
    const[FirstName,setFirstName]=useState("");
    const[FirstNameError,setFirstNameError]=useState("");

    const[LastName,setLastName]=useState("");
    const[LastNameError,setLastNameError]=useState("");

    const[Email,setEmail]=useState("");
    const[EmailError,setEmailError]=useState("");

    const[Password,setPassword]=useState("");
    const[PasswordError,setPasswordError]=useState("");

    const[ConfirmPassword ,setConfirmPassword]=useState("");
    const[ConfirmPasswordError,setConfirmPasswordError]=useState("");


    const createuser=(event)=>{
        event.preventDefault();

        const newUser = { FirstName, LastName, Email,Password, ConfirmPassword };
        console.log("Hello", newUser);
    }
    const handleFirstName=(event)=>{
        setFirstName(event.target.value);
        if (event.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters. ");
        }   
    }
    const handleLastName=(event)=>{
        setLastName(event.target.value);

        if (event.target.value.length <2){
            setLastNameError("Last Name must be at least 2 characters.");
        }   
    }


    const handleEmailEroor=(event)=>{
        setEmail(event.target.value);


        if (event.target.value.length <5){
            setEmailError("Email must be at least 5 characters.");
        }   
    }


    const handelPasswordError=(event)=>{
        setConfirmPassword(event.target.value);
        setPassword(event.target.value);

        if(ConfirmPassword !==Password){
            setConfirmPasswordError("Confirm Passwordmust be match");
            setPasswordError("Passowrds must be match");

        }
       else if(event.target.value.length < 8){
            setConfirmPasswordError("passwords must match and be at least 8 characters");
            setPasswordError("passwords must match and be at least 8 characters.");

        }
    }

    return(
        <><form Onsubmit={ createuser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange= { handleFirstName } />
                {
                    FirstNameError ?
                    <p style={{color:'red'}}>{ FirstNameError }</p> :
                    ''
                }

            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName } />
                {
                    LastNameError ?
                    <p style={{color:'red'}}>{ LastNameError }</p> :
                    ''
                }

            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmailEroor } />
                {
                    EmailError ?
                    <p style={{color:'red'}}>{ EmailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange = { handelPasswordError } />
                {
                    ConfirmPasswordError ?
                    <p style={{color:'red'}}>{ ConfirmPasswordError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Password: </label>
                <input type="text" onChange = { handelPasswordError } />

                {
                    PasswordError ?
                    <p style={{color:'red'}}>{ PasswordError }</p> :
                    ''
                }
                
            </div>

        </form>
        </>
        
    );


    
};

export default MoreeForms;
