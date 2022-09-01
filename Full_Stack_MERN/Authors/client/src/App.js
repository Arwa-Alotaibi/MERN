import './App.css';

import Main from './views/Main';

import CreateAuthor from './component/CreateAuthor';

import Update from './views/Update';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div >
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
        <Main />
        </Route>

        <Route  exact path="/new">
        <CreateAuthor />
        </Route>

        <Route  exact path="/edit/:id">
        <Update />
        </Route>

  
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
