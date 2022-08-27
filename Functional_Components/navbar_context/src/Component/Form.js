
import { useContext } from 'react';

import UserName from '../Context/UserName'

import styles from "./styles.module.css"

const Form=()=>{
   //const [name, setname]= useContext(UserName);
   
   const {name, setname}= useContext(UserName);


const createuser=(event)=>{
    event.preventDefault();
}

function HandleChange(event){
    setname(event.target.value)
  }

return(

    <form onSubmit={createuser}>
       <div className={styles.col-25}>
        <label >Your Name :</label>
        </div>
        <div className={styles.col-75}>
        <input type='text'   name='name' value={ name } onChange={HandleChange}></input>
        </div>

    </form>


);
}

export default Form;