import { combineReducers } from "redux";
import { randomPostReducer } from './postsReducer.js';

export default combineReducers({
    randomPostReducer: randomPostReducer
})