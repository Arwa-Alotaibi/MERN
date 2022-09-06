
import styles from './styles.module.css';
import { useState } from 'react';
const BoxGenerator = (props  ) => {
    const [colorinput, setColorinput] = useState('')

  const [AllColor, setAllColor] =useState([])



  const HandleSubmit=(e)=>{
    e.preventDefault();
}

const AddColor=()=>{

   setAllColor([...AllColor , colorinput])

}
return (
    <>
  <form onSubmit={HandleSubmit}>
          <label>Color:</label>
          <input type='text'  onChange={ (e) => setColorinput(e.target.value) }  name="color"  value={colorinput} ></input>
          <input type='submit' value='add'  onClick={AddColor}></input>
      </form>

      < div   className={styles.box}   style={{ backgroundColor:colorinput  , colorinput:colorinput}} >
        {/* {
                AllColor.map((colorinput, i) => 
                    <div>{colorinput}</div>
                )
            } */}

                {colorinput}

      </ div>

      </>
)

}


export default BoxGenerator;



