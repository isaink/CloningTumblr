import { FETCHING_USER_PROFILE   } from './../Redux_Actions/boardAction';

export const randomBgReducer = ( initialState = {}, action) => {

    switch(action.type){
        case FETCHING_USER_PROFILE: 
            return action.user;
        default:
            return initialState;
    }
};