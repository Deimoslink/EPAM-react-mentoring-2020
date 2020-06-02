import * as React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {Genres} from './Genres';
import {create, ReactTestRenderer} from 'react-test-renderer';


const component = <Genres />;
let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
    wrapper = shallow(component);
    snapshot = create(component);
});

describe('Genres component', () => {
    it('exists', () => {
        expect(wrapper).toBeTruthy();
    });

    it('matches snapshot', () => {
        expect(snapshot.toJSON()).toMatchSnapshot();
    });
});
