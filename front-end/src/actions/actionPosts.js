import * as postsApi from '../utilsRedux/utilPosts';
export let RECEIVE_POST = "RECEIVE_POST";

export const receivedPost = ( post ) => {
    return {
        type: RECEIVE_POST, 
        post: post // is the payload
    }
};

export const fetchRandomPost = () => dispatch => {
    return postsApi.fetchRandomPost()
    .then( res => {
        return dispatch(receivedPost(res.data.body.body))

    })
};

