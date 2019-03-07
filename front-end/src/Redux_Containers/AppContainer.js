import App from '../App';
import { connect } from 'react-redux';
import { newUser, logInUser, checkAuthenticateStatus, LogOutUser } from '../Redux_Actions/authAction'; 

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
        logOutUser: () => dispatch(LogOutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);