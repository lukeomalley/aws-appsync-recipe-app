import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Recipes} />
            <Route exact path="/addrecipe" component={AddRecipe} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
