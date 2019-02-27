import axios from 'axios';
import Auth from '../components/utils/Auth';

export let RECEIVE_USER_AUTH = 'RECEIVE_USER_AUTH';

export const receiveUserAuth = ( user ) => {
    return {
        type: RECEIVE_USER_AUTH,
        user: user
    }
};

export const newUser = ( user ) => dispatch => {
    return axios.post('/new', user)
    .then( res => {
        console.log(res)
        return dispatch(receiveUserAuth(res.data.user))
    })
};

export const logInUser = ( user ) =>  dispatch => {
    return axios.post('/login', user)
    .then( res => {
        Auth.authenticateUser( res.data.email);
        return dispatch(receiveUserAuth(res.data.email))
    })
    .catch((err) => {
        Auth.deauthenticateUser(); // is going to the localstorage and removing the token (token = user)
    })
};

export const LogOutUser = ( ) =>  dispatch => {
    return axios.post('/logout')
    .then(() => {
        Auth.deauthenticateUser();
        return dispatch(receiveUserAuth(null))
    })
    .catch(err => {
        Auth.deauthenticateUser();
    })
};

export const checkAuthenticateStatus = ( {isLoggedIn, username  }) => dispatch => { // talk to Reed about it
    return axios.get('/isLoggedIn')
    .then(user => {
        if (user.data.username === Auth.getToken()) {
            return dispatch({ 
                isLoggedIn: Auth.isUserAuthenticated(),
                username: Auth.getToken()
            })
        }else{
            if (user.data.username) {
                this.props.logoutUser();
            } else {
                Auth.deauthenticateUser();
            }
        }
    })
}
