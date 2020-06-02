import {combineReducers, createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {movies} from './reducers/movies-reducer';
import {dropdownState} from './reducers/dropdown-state-reducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({movies, dropdownState}))

export default createStore(
    persistedReducer,
    applyMiddleware(thunk, logger)
);
