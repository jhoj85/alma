import React from 'react';
import './App.css';
import Client from './components/Client';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Map from './components/Map';
import Pacientes from './components/Pacientes';


function App() {
  return (
   

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">Pacientes</Link>
            </li>
            <li>
              <Link to="/map">Maps</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/list">
            <Pacientes />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <Client />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
