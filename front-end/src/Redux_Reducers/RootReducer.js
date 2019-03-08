import { combineReducers } from "redux";
import { randomBgReducer } from './randomBgReducer.js';
import { sessionStarting  } from './userAuthReducer';
import { toggleButtonsReducer } from  './buttonsReducer';
import { postsReducer } from './postsReducer';

export default combineReducers({
    img: randomBgReducer,
    userAuth: sessionStarting,  // this variables will be the key on the state.
    toggleButtons: toggleButtonsReducer,
    posts: postsReducer
});