
import Main from './views/Main';
import Detail from './views/Detail';

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
        <Route path="/Allproducts">
        <Main />
        </Route>
        <Route path="/products/:id">
          <Detail/>
        </Route>
        <Route path="/edit/:id">
          <Update />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>

  );
}
    
export default App;



