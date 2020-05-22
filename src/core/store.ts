import {combineReducers, createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {movies} from './reducers/movies-reducer';
import {dropdownState} from './reducers/dropdown-state-reducer';


export default createStore(
    combineReducers({movies, dropdownState}),
    applyMiddleware(thunk, logger)
);
