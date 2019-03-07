
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
    const {checkAuthenticateStatus, LogOutUser, logInUser, newUser} = this.props;

    return (
        <> 
          <div className="App">
            <Nav 
              logOutUser={LogOutUser}
              checkAuthenticateStatus={checkAuthenticateStatus}
            />

            <Switch >
              <PrivateRoute 
                path="/dashboard" 
                component={Dashboard} 
                logOutUser={LogOutUser}
                checkAuthenticateStatus={checkAuthenticateStatus}
              />
              <PrivateRoute path='/account'
                component={Account}
                logOutUser={LogOutUser}
                checkAuthenticateStatus={checkAuthenticateStatus}
              />
              <PrivateRoute path='/follows'
                component={Follows}
                logOutUser={LogOutUser}
                checkAuthenticateStatus={checkAuthenticateStatus}
              />
              <AuthRouter exact path="/" 
                component={WelcomeContainer} 
                logInUser={logInUser}
                signUp={newUser}
              />
            </Switch>

          </div>
        </>
    );
  }
}

export default App;
