import { combineReducers } from "redux";
import { randomBgReducer } from './postsReducer.js';
import { sessionStarting  } from './userAuthReducer';
import { toggleButtonsReducer } from  './buttonsReducer';

export default combineReducers({
    img: randomBgReducer,
    userAuth: sessionStarting,  // this variables will be the key on the state.
    toggleButtons: toggleButtonsReducer,
});