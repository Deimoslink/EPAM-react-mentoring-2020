import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {Pagination} from './Pagination';
import {create, ReactTestRenderer} from 'react-test-renderer';


const paginationProps_1 = {offset: 0, limit: 6, total: 72};
const paginationProps_2 = {offset: 0, limit: 6, total: 14};
const paginationProps_3 = {offset: 24, limit: 6, total: 72};
const paginationProps_4 = {offset: 72, limit: 6, total: 72};

const component = <Pagination {{limit: 6}}/>;
let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
    wrapper = shallow(component);
    snapshot = create(component);
});

describe('Pagination component', () => {
    it('exists', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should have selected page', () => {
        expect(wrapper.find('.current')).toBeTruthy();
    });

    it('should calculate page buttons correctly', () => {
        expect(wrapper.instance().calculatePageButtons(paginationProps_1)).toEqual([1,2,3,4,5]);
        expect(wrapper.instance().calculatePageButtons(paginationProps_2)).toEqual([1,2,3]);
        expect(wrapper.instance().calculatePageButtons(paginationProps_3)).toEqual([3,4,5,6,7]);
        expect(wrapper.instance().calculatePageButtons(paginationProps_4)).toEqual([8,9,10,11,12]);
    });

    it('calculate offset should work correctly', () => {
        expect(wrapper.instance().calculateOffset(1)).toEqual(0);
        expect(wrapper.instance().calculateOffset(2)).toEqual(6);
        expect(wrapper.instance().calculateOffset(3)).toEqual(12);
        expect(wrapper.instance().calculateOffset(10)).toEqual(54);
    });

    it('matches snapshot', () => {
        expect(snapshot.toJSON()).toMatchSnapshot();
    });
});
