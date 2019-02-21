import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

//components
import {Nav} from './components/Navbar';
import {Welcome} from './components/outside/Welcome'
import {Login} from './components/outside/Login';
import Home from './components/Home';


class App extends Component {
  state = {
    navs: '',
  }
  
  render() {
    return (
        <> 
          <div className="App">
            <Nav />
            <Switch >
              <Route exact path='/influers/welcome' component={Welcome} />
              <Route exact Path='/influers/login' component={Login} />
              <Route  path='/influers/dashboard' component={Home} />
            </Switch>
          </div>
        </>
    );
  }
}

export default App;
