import {shallow} from 'enzyme';
import * as React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {create} from 'react-test-renderer';
import {moviesMock} from '../../../__mocks__/application-state-mock';


const mockStore = configureStore([thunk]);
let store;
let component;

beforeEach(() => {
    store = mockStore({movies: moviesMock});
    component = <Provider store={store}>
                    <App />
                </Provider>;
});

describe('App component', () => {
    it('exists', () => {
        const wrapper = shallow(component);
        expect(wrapper).toBeTruthy();
    });

    it('matches snapshot', () => {
        const snapshot = create(component);
        expect(snapshot.toJSON()).toMatchSnapshot();
    });
});
