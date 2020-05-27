import {ACTIONS} from './actions.enum';
import {
    setGenreAction,
    setOptionAction,
    setPageAction,
    setSizeAction,
    setSortAction,
    toggleDropdownAction
} from './actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {dropdownStateMock, moviesMock} from '../../../__mocks__/application-state-mock';


const mockStore = configureStore([thunk]);
let store;

beforeEach(() => {
    store = mockStore({movies: moviesMock, dropdownState: dropdownStateMock});
});

describe('actions', () => {

    it('toggle dropdown action', () => {
        const expectedAction = {payload: true, type: ACTIONS.SHOW_DROPDOWN};
        expect(toggleDropdownAction(true)).toEqual(expectedAction)
    });

    it('set page action', () => {
        const expectedActions = [{payload: 10, type: ACTIONS.SET_PAGE}];
        return store.dispatch(setPageAction(10)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('set size action', () => {
        const expectedActions = [{payload: 12, type: ACTIONS.SET_SIZE}];
        return store.dispatch(setSizeAction(12)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('set sort', () => {
        const expectedActions = [{payload: 'desc', type: ACTIONS.SORT_ORDER}];
        return store.dispatch(setSortAction('desc')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('set genre', () => {
        const expectedActions = [{payload: 'comedy', type: ACTIONS.GENRE}];
        return store.dispatch(setGenreAction('comedy')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });


    it('set option', () => {
        const expectedActions = [{payload: 'vote_count', type: ACTIONS.OPTIONS}];
        return store.dispatch(setOptionAction('vote_count')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

});
