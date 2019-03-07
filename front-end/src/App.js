
import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';

import Nav from './components/menus/Navbar';
import Account from './components/account/Account';
import Dashboard from './components/board/Dashboard';
import Follows from './components/follows/Follows';
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
              <PrivateRoute path='/account'
              component={Account}
              />
              <PrivateRoute path='/follows'
              component={Follows}
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
