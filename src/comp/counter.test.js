import React from 'react'
import {shallow} from 'enzyme'

import Counter from './Counter'

const setUp = (props={}) => {
    const component = shallow(<Counter {...props} />);
    return component;
};

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('Counter component',()=>{
    let component;
        beforeEach(() => {
            component = setUp(); 
        });

    it('starts with count 0',()=>{
        const wrapper = findByTestAtrr(component, 'CounterCheck');
            // const wrapper = component.find('.UserListComponent');
        expect(wrapper.length).toBe(1);
    })
})