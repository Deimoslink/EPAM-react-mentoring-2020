import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {Movie} from './Movie';
import {moviePropsMock} from '../../../__mocks__/movie-props-mock';
import {create, ReactTestRenderer} from 'react-test-renderer';


const component = <Movie key={1} {...moviePropsMock}/>;
let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
    wrapper = shallow(component);
    snapshot = create(component);
});

describe('Movie component', () => {
    it('exists', () => {
        expect(wrapper).toBeTruthy();
    });

    it('matches snapshot', () => {
        expect(snapshot.toJSON()).toMatchSnapshot();
    });
});
