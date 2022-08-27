
import React, {useContext} from 'react';

import UserName from '../Context/UserName';
import styles from "./styles.module.css"



const Navbar=()=>{

   // const name = useContext(UserName);
   const { name } = useContext(UserName);


return (


    <div  className={styles.nav} >

        <h1  >Hi {name} !</h1>
    </div>
);


} 

export default Navbar;