
import PersonCard from './components/PersonCard';

import './App.css';

function App() {

  return (
    <div className="App">
      <PersonCard firstName='Doe' lastName ='jane' age={45} hairColor='Black' ></PersonCard>

      <PersonCard firstName='Smith' lastName ='jhon' age={88} hairColor='Brown' ></PersonCard>

      <PersonCard firstName='Fillmore' lastName ='Millard' age={50} hairColor='Brown' ></PersonCard>

      <PersonCard firstName='Smith' lastName ='Maria' age={62} hairColor='Brown' ></PersonCard>
    </div>
  );
}

export default App;
