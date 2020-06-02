import {shallow} from 'enzyme';
import * as React from 'react';
import Filter from './Filter';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {dropdownStateMock, moviesMock} from '../../../__mocks__/application-state-mock';
import {create} from 'react-test-renderer';

const mockStore = configureStore([thunk]);
let store;
let component;

beforeEach(() => {
    store = mockStore({movies: moviesMock, dropdownState: dropdownStateMock});
    component = <Provider store={store}>
                    <Filter />
                </Provider>;
});

describe('Filter component', () => {
    it('exists', () => {
        const wrapper = shallow(component);
        expect(wrapper).toBeTruthy();
    });

    it('matches snapshot', () => {
        const snapshot = create(component);
        expect(snapshot.toJSON()).toMatchSnapshot();
    });
});
