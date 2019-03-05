import {TOGGLE} from '../Redux_Actions/buttonsAction';

export const toggleButtonsReducer  = ( initialState = { buttons: false }, action) => {
 switch(action.type){
    case TOGGLE:
        return !initialState.buttons;
    default:
        return initialState;
    }
};