import { RECEIVE_USER_AUTH } from '../Redux_Actions/authAction';

export const sessionStarting = ( initialState = { user: null }, actions ) => {
    Object.freeze(initialState)
    switch (actions.type) {
        case RECEIVE_USER_AUTH : 
        console.log('REACHED USER REDUCER', actions)
        return {
                user: actions.user,
            }
        default:
            return initialState;
    }
};
