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
        return dispatch(receiveUserAuth(null))
        // return dispatch(logInUser(res.data.email))
    })
    .catch(err => {
        console.log(err)
    })
};

export const logInUser = ( user ) =>  dispatch => {
    return axios.post('/users/login', user)
    .then( res => {

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
    console.log('chek iff auth status is running')

    axios.get('/users/isLoggedIn')
    .then(res => {
        let user = res.data;
        console.log( user, 'user that arrived')
        console.log(user.email,"===" ,Auth.getToken())
        if (user.email === Auth.getToken()) {
            console.log('REACHED AUTHENTICATE', user)
            return dispatch(receiveUserAuth(user))

        }else{
            if (user.email) {
                dispatch(LogOutUser());
            } else {
                Auth.deauthenticateUser();
            }
        }
    })
    .catch( err => {
        Auth.deauthenticateUser();
    })
};