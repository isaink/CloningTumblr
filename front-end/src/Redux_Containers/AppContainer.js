import App from '../App';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { newUser, logInUser, checkAuthenticateStatus } from '../Redux_Actions/authAction'; 

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.username, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newUser: (user) => dispatch( newUser(user) ),
        logInUser: (user) => dispatch( logInUser(user) ),
        checkAuthenticateStatus: () => {
            dispatch( checkAuthenticateStatus())
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));