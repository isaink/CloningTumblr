import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import RootReducer from '../reducers/RootReducer'

const store = createStore(RootReducer, {}, applyMiddleware(thunk, logger))
    console.log( store.getState, 'store')
export default store;