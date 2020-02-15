import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import {LandingPage, ContactUs, About, Register, Login} from './components/LandingPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/contactUs'>
          <ContactUs />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
