import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect, withRouter} from "react-router-dom";

import Auth from "./Auth";

const AuthUser= ({component: Component, path, loggedIn}) => {
  return (
    <Route
      path={path}
      render={ props => 
        !loggedIn ? <Component {...props} /> : <Redirect to= {"/dashboard"} />
      }
    />
  )
};

const Private = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      path={path}
      render={ props => 
        loggedIn ? <Component {...props} /> : <Redirect to= {"/"} />
      }
    />
  )
};

const mapStateToProps = ( state ) => {
  return {
    loggedIn:  Auth.isUserAuthenticated()
  }
};

export const AuthRouter = withRouter(connect(mapStateToProps, null)(AuthUser))

export const PrivateRoute = withRouter(connect(mapStateToProps, null)(Private))