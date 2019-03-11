
import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';

import Account from './components/account/Account';
// import Dashboard from './components/board/Dashboard';
import Follows from './components/follows/Follows';
import WelcomeContainer from './Redux_Containers/WelcomeContainer';
import { AuthRouter, PrivateRoute }  from './components/utils/AuthRouting';
import NavContainer from './Redux_Containers/NavContainer';
import BoardContainer from './Redux_Containers/BoardContainer';

class App extends Component {

  componentDidMount(){
    const { checkAuthenticateStatus} = this.props;
    checkAuthenticateStatus();

  }

  render() {
    return (
        <> 
          <div className="App">
            <NavContainer />

            <Switch >
              <PrivateRoute 
                path="/dashboard" 
                component={BoardContainer} 
              />
              <PrivateRoute path='/account'
                component={Account}
              />
              <PrivateRoute path='/follows'
                component={Follows}

              />

              <AuthRouter path="/" 
                component={WelcomeContainer} 
              />

            </Switch>

          </div>
        </>
    );
  }
}

export default App;
