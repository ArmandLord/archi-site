import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles/GlobalStyles'
import { Home, NotFound, About } from './pages'
import { Navbar, Footer } from './components'


function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/about' component={About}/> 
          <Route exact path='*' component={NotFound}/> 
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
