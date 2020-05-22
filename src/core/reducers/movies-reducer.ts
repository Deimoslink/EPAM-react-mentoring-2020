import {ActionI, MovieI} from '../interface';
import {ACTIONS} from '../actions/actions.enum';
import {moviesStateI} from './reducer.interface';

export const movies = (state: moviesStateI = {
    movies: [],
    selectedOption: 'release_date',
    selectedGenre: '',
    query: '',
    sortOrder: 'asc',
    offset: 0,
    limit: 6,
    total: null
}, {type, payload}: ActionI) => {
    switch (type) {
        case ACTIONS.OPTIONS:
            state = {
                ...state,
                selectedOption: payload,
                offset: 0
            };
            break;
        case ACTIONS.GET_MOVIES:
            state = {
                ...state,
                movies: payload,
                total: payload.length
            };
            break;
        case ACTIONS.GENRE:
            state = {
                ...state,
                selectedGenre: payload,
                offset: 0
            };
            break;
        case ACTIONS.QUERY:
            state = {
                ...state,
                query: payload,
                offset: 0
            };
            break;
        case ACTIONS.SORT_ORDER:
            state = {
                ...state,
                sortOrder: payload,
                offset: 0
            };
            break;
        case ACTIONS.GET_TOTAL:
            state = {
                ...state,
                total: payload
            };
            break;
        case ACTIONS.SET_SIZE:
            state = {
                ...state,
                limit: payload,
                offset: 0
            };
            break;
        case ACTIONS.SET_PAGE:
            state = {
                ...state,
                offset: payload
            };
            break;
        default:
            break;
    }
    return state;
};
