import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, NotFound, About } from './pages'



function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/about' component={About}/> 
          <Route exact path='*' component={NotFound}/> 
        </Switch>
    </Router>
  );
}

export default App;
