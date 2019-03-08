import axios from 'axios';
export let RECEIVE_POST = "RECEIVE_POST";
export let FETCH_POSTS = 'FETCH_POSTS';
export let RANDOM_BACKGROUND = 'RANDOM_BACKGROUND';
export let FETCH_ERROR = 'FETCH_ERROR';

export const receivedPosts = ( posts ) => {
    return {
        type: RECEIVE_POST, 
        posts: posts // is the payload
    }
};

export const fetchPosts = () => dispatch => {
    axios.get('/dashboard')
    .then( res => {
        return dispatch(receivedPosts( res.posts));
    })
    .catch((err) => { 
        return dispatch(fetchErrors(err))
    })
};

export const receivedRandomBG = ( img ) => {
    return {
        type: RANDOM_BACKGROUND,
        img: img
    }
};

export const fetchRandomBG = () => dispatch => {
    return axios.get('/welcome')
    .then( res => {
        return dispatch(receivedRandomBG(res.data.img.url))
    })
    .catch( (err) => { 
        return dispatch(fetchErrors(err))
    })
};

export const fetchErrors = (err) => {
    return {
        type: FETCH_ERROR,
        err: err
    }
};