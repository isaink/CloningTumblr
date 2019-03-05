import axios from 'axios';
export let RECEIVE_POST = "RECEIVE_POST";
export let RANDOM_BACKGROUND = 'RANDOM_BACKGROUND';
export let FETCH_ERROR = 'FETCH_ERROR';


export const receivedPost = ( post ) => {
    return {
        type: RECEIVE_POST, 
        post: post // is the payload
    }
};

export const receivedRandomBG = ( img ) => {
    return {
        type: RANDOM_BACKGROUND,
        img: img
    }
};

export const getErrors = (err) => {
    return {
        type: FETCH_ERROR,
        err: err
    }
}

export const fetchRandomBG = () => dispatch => {
    return axios.get('/welcome')
    .then( res => {
        console.log(res, "RES")
        return dispatch(receivedRandomBG(res.data.post.body))

    })
    .catch( (err) => { 
        return dispatch(getErrors(err))
        // dispatch({
        //     type: FETCH_ERROR,
        //     err: err
        // })
    })
}