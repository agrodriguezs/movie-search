import React, { Component } from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom";

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'

import './assets/css/App.css';
import 'bulma/css/bulma.css';

class App extends Component {
 render () {
   return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:movieId' component={Detail} />
        </Switch>
      </div>
    );
  }
}

export default App;
