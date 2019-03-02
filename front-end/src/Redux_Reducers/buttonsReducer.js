import {TOGGLE} from '../Redux_Actions/buttonsAction';

export const toggleReducer = ( initialState = { buttons: false }, action) => {
 switch(action.type){
   case TOGGLE:
   return !initialState.buttons;
   default:
   return initialState.buttons;
 }
}