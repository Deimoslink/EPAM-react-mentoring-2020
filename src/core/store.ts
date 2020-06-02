import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {movies} from './reducers/movies-reducer';
import {dropdownState} from './reducers/dropdown-state-reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router'

export const history = createBrowserHistory();


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['router']
};
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const persistedReducer = persistReducer(persistConfig, combineReducers({router: connectRouter(history), movies, dropdownState}));

export default createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk, logger))
);
