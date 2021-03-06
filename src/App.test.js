import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr, testStore } from 'utils/TestUtils';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    return shallow(<App store={store} />);
}

describe('<App /> component', () => {

    let component;
    beforeEach(() => {
        const initialState = {
            common: {
                data: [{
                    title: "Test title 1",
                    body: "Test"
                },
                {
                    title: "Test title 2",
                    body: "Test"
                },
                {
                    title: "Test title 3",
                    body: "Test"
                }]
            }
        }
        component = setUp(initialState);
    })

    it('Should renders app-component without errors', () => {
        const wrapper = findByTestAttr(component, 'app-component');
        expect(wrapper.length).toBe(1);
    });

    it('Should renders home-component without errors', () => {
        const wrapper = findByTestAttr(component, 'home-component');
        expect(wrapper.length).toBe(1);
    });

});