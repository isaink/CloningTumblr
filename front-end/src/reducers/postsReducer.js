import { RECEIVE_POST } from '../actions/actionPosts.js';

export const randomPostReducer = ( oldState = {}, action) => {
    switch(action.type){
        case RECEIVE_POST: 
            return  action.post;
        default:
            return oldState;
    }
};