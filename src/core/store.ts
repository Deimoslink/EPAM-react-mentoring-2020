import {combineReducers, createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {moviesReducer} from './reducers/movies-reducer';
import {dropdownStateReducer} from './reducers/dropdown-state-reducer';


export default createStore(
    combineReducers({moviesReducer, dropdownStateReducer}),
    applyMiddleware(thunk, logger)
);
