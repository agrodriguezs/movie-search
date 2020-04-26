import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";

import { Footer } from './components/Footer'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import 'bulma/css/bulma.css'
import './assets/css/App.css'


class App extends Component {
 render () {
   return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:movieId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
