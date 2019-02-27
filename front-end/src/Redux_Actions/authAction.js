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
    return axios.post('/users/new', user)
    .then( res => {
        // console.log(res)
        // debugger
        return dispatch(receiveUserAuth(null))
        // return dispatch(logInUser(res.data.email))
    })
    .catch(err => {
        console.log(err)
    })
};

export const logInUser = ( user ) =>  dispatch => {
    debugger
    return axios.post('/users/login', user)
    .then( res => {
        debugger
        Auth.authenticateUser( res.data.email ); // This email is saved into the localstorage
        return dispatch(receiveUserAuth(res.data))
    })
    .catch((err) => {
        Auth.deauthenticateUser(); // is going to the localstorage and removing the token (token = user)
    })
};

export const LogOutUser = ( ) =>  dispatch => {
    return axios.post('/users/logout')
    .then(() => {
        Auth.deauthenticateUser();
        return dispatch(receiveUserAuth(null))
    })
    .catch(err => {
        Auth.deauthenticateUser();
    })
};

export const checkAuthenticateStatus = () => dispatch => { 
    return axios.get('/users/isLoggedIn')
    .then(user => {
        if (user.data.username === Auth.getToken()) {
            debugger
            return dispatch({ // test  // talk to Reed about it
                receive: receiveUserAuth(user.data.email),
                isLoggedIn: Auth.isUserAuthenticated(),
                username: Auth.getToken()
            })
        }else{
            if (user.data.email) {
                LogOutUser();
            } else {
                Auth.deauthenticateUser();
            }
        }
    })
    .catch( err => {
        Auth.deauthenticateUser();
    })
};
