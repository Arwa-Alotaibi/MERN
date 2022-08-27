import { useState } from "react";

import UserName from '../Context/UserName'

import Form from "./Form";

import Navbar from "./Navbar";
//The Context Provider is how we provide the information from our context to child components within our component tree.

const Wrapper=()=>{

const[name,setname]=useState('arwa');


return (
<UserName.Provider value={{name,setname}}>
<Navbar/>

<Form/>


</UserName.Provider>







);

}

export default Wrapper;
