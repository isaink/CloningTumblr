import { RANDOM_BACKGROUND  } from '../Redux_Actions/postsAction';

export const randomBgReducer = ( initialState = {}, action) => {
    Object.freeze(initialState);
    switch(action.type){
        case RANDOM_BACKGROUND : 
            return action.img;
        default:
            return initialState;
    }
}