import { combineReducers } from "redux";
import { randomBgReducer } from './postsReducer.js';
import { sessionStarting  } from './userAuthReducer';

export default combineReducers({
    img: randomBgReducer,
    userAuth: sessionStarting  // will be the key on the state.
});