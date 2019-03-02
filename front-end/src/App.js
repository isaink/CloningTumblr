
import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';

import Nav from './components/menus/Navbar';
import Dashboard from './components/users/Dashboard';
import WelcomeContainer from './Redux_Containers/WelcomeContainer';
import { AuthRouter, PrivateRoute }  from './components/utils/AuthRouting';

class App extends Component {

  render() {
    return (
        <> 
          <div className="App">
            <Nav />

            <Switch >
              <PrivateRoute 
                path="/dashboard" 
                component={Dashboard} 
                logOutUser={this.props.LogOutUser}
                
              />
              <AuthRouter exact path="/" component={WelcomeContainer} />
              <AuthRouter exact path="/login" component={WelcomeContainer} />
              <AuthRouter exact path="/register" component={WelcomeContainer} />
            </Switch>

          </div>
        </>
    );
  }
}

export default App;
