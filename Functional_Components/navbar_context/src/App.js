import './App.css';
import React from 'react';

import Wrapper from './Component/Wrapper';
import FormWrapper from './Component/FormWrapper';
import Navbar from './Component/Navbar';
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar/>
        <FormWrapper/>
        </Wrapper>
      
    </div>
  );
}

export default App; 
  

