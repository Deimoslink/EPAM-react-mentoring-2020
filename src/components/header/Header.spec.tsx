import {mount, shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {Header} from './Header';
import {create, ReactTestRenderer} from 'react-test-renderer';


const component = <Header />;
let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
    wrapper = shallow(component);
    snapshot = create(component);
});

describe('Header component', () => {
    it('exists', () => {
        expect(wrapper).toBeTruthy();
    });

    it('input should have placeholder', () => {
        expect(wrapper.find('input').prop('placeholder')).toBe('What do you want to watch?');
    });

    it('input onchange should work', () => {
        const mounted = mount(component);
        const input = mounted.find('input');
        input.simulate('change',  { target: { value: 'testvalue' } });
        expect(mounted.instance().query).toEqual('testvalue')
    });

    it('matches snapshot', () => {
        expect(snapshot.toJSON()).toMatchSnapshot();
    });
});
