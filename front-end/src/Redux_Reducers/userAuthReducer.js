import { RECEIVE_USER_AUTH } from '../Redux_Actions/authAction';

// const initialState ={
//     isAuthenticated: false,
//     user: null
// };

export const sessionStarting = ( initialState = { user: null }, actions ) => {
    Object.freeze(initialState)
    switch (actions.type) {
        case RECEIVE_USER_AUTH : 
            return {
                user: actions.user,
                // isAuthenticated: true,
            }
        default:
            return initialState;
    }
};