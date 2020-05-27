import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {Options} from './Options';
import {create, ReactTestRenderer} from 'react-test-renderer';


describe('Options component', () => {
    it('exists', () => {
        const component = <Options {{showDropdown: false}}/>;
        const wrapper: ShallowWrapper = shallow(component);
        expect(wrapper).toBeTruthy();
    });

    it('Options should show dropdown', () => {
        const component = <Options {{showDropdown: true}}/>;
        const mounted: ReactWrapper = mount(component);
        expect(mounted.prop('showDropdown')).toBeTruthy();
    });

    it('Options should hide dropdown', () => {
        const component = <Options {{showDropdown: false}}/>;
        const mounted: ReactWrapper = mount(component);
        expect(mounted.prop('showDropdown')).toBeFalsy();
    });

    it('should toggle dropdown', () => {
        const component = <Options toggleDropdown={jest.fn()} {{showDropdown: false}}/>;
        const mounted: ReactWrapper = mount(component);
        mounted.find('.selected-option').simulate('click');
        expect(mounted.find('showDropdown')).toBeTruthy();
    });


    it('matches snapshot', () => {
        const component = <Options {{showDropdown: false}}/>;
        const snapshot: ReactTestRenderer = create(component);
        expect(snapshot.toJSON()).toMatchSnapshot();
    });
});
