import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <h3>Home</h3>
      </div>
      <Switch>
        <Route path='/contactUs'>
          <ContactUs />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
