import './App.css';

import React from "react";
import {BrowserRouter,Switch,Route,Link } from "react-router-dom";
import Home from './components/Home';

import WithParams from './components/WithParams';

import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/home'>
          <Home/>
        </Route>

        <Route  exact path='/:display'>
          <WithParams/>
        </Route>

        <Route  exact path="/:text/:colorss/:bc">
          <Colors/>
        </Route>






      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
