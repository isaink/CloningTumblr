import { RECEIVE_POST  } from '../Redux_Actions/postsAction';

export const postsReducer = ( initialState = { posts: '' }, action) => {

    switch(action.type){
        case RECEIVE_POST :
            return {
                ...initialState,
                posts: action.posts  //payload
            }
        default:
            return initialState;
    }
};