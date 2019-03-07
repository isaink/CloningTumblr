import { FETCHING_USER_PROFILE   } from './../Redux_Actions/boardAction';

export const profiles = ( initialState = { username, profile_pic, }, action) => {

    switch(action.type){
        case FETCHING_USER_PROFILE: 
            return {
                ...initialState,
                user: action.user //payload
            }
        default:
            return initialState;
    }
};