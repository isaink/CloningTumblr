import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';

// import Users from "./users/Users";
// import AuthForm from "./login/AuthForm"

import Auth from "./components/utils/Auth";
import PrivateRoute  from './components/utils/AuthRouting'

import './App.css';

//components
import {Nav} from './components/menus/Navbar';
import {Welcome} from './components/welcome/Welcome'
import {Login} from './components/Login';
import Dashboard from './components/Dashboard';
import WelcomeContainer from './components/welcome/WelcomeContainer';

class App extends Component {
  state = {
    isLoggedin: false,
    user: '',
    // navs: '',
  };

  componentDidMount(){
    this.checkAuthenticateStatus();
  };

  checkAuthenticateStatus = () => {
    console.log("authenticatin'")
    axios.post("/users/isLoggedIn").then(user => {
      if (user.data.username === Auth.getToken()) {
        console.log('hello?')
        console.log(Auth.isUserAuthenticated())
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };
  
  render() {

    return (
        <> 
          <div className="App">
            <Nav />
            <Switch >
            
              <Route path="/welcome" render={() => {
                if (this.state.isLoggedIn) {
                  return <Redirect to="/influers/dashboard" />
                }
                return (
                  <WelcomeContainer
                  
                  />
                );
                }}
              />
              <PrivateRoute path="/users" component={Dashboard} />
              {/* <Route exact path='/influers/register' component={} */}

              <Route exact path="/welcome" component={WelcomeContainer} />

              <Route exact Path='/influers/login' component={Login} />
              <Route  path='/influers/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </>
    );
  }
}


// checkAuthenticateStatus={this.checkAuthenticateStatus}
// isLoggedIn={this.state.isLoggedIn}
export default App;
