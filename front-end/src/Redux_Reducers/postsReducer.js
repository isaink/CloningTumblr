 import { RECEIVE_POST  } from '../Redux_Actions/postsAction';

export const postsReducer = ( initialState = [ ], action) => {

    switch(action.type){
        case RECEIVE_POST :
            return [
                ...initialState,
                ...action.posts  //payload
            ]
        default:
            return initialState;
    }
};