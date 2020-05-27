import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {Main} from './Main';
import {mainPropsMock} from '../../../__mocks__/main-props-mock';
import {create, ReactTestRenderer} from 'react-test-renderer';


const component = <Main {...mainPropsMock}/>;
let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
    wrapper = shallow(component);
    snapshot = create(component);
});

describe('Main component', () => {
    it('exists', () => {
        expect(wrapper).toBeTruthy();
    });

    it('matches snapshot', () => {
        expect(snapshot.toJSON()).toMatchSnapshot();
    });
});
