import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Login from './Login';
import List from './List';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/destinations">Travel Destinations</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/destinations">
            <List />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div>
    //   <Login />
    // </div>
  );
}

export default App;
