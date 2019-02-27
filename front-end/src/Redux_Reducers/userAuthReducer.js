import { RECEIVE_USER_AUTH } from '../Redux_Actions/authAction';

const initialState ={
    isAuthenticated: false,
    user: null
};

export const sessionStarting = (state = initialState, actions ) => {
    switch (actions.type) {
        case RECEIVE_USER_AUTH : 
            return {
                user: actions.user,
                // isAuthenticated: 
            }
        default:
            return initialState;
    }
};