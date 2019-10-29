import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Recipes} />
            <Route exact path="/add-recipe" component={NewRecipeForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
