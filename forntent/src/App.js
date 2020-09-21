import React from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Team from './components/Team';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>My App</h1>
      
      <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Dashboard' component={Dashboard} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Team' component={Team} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;