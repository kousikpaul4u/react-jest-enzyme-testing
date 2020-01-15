import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from '../utils/TestUtils';

const setUp = (props = {
    message: "Welcome to React"
}) => {
    return shallow(<Header {...props} />);
}

describe('<Header /> component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should renders 1 header-div class', () => {
        const wrapper = findByTestAttr(component, 'header-div');
        expect(wrapper.length).toBe(1);
    });

    it('Should header-div having text "Welcome to React"', () => {
        const wrapper = findByTestAttr(component, 'header-div');
        expect(wrapper.text()).toBe("Welcome to React");
    });

    it('Should renders 1 logo div class', () => {
        const logo = findByTestAttr(component, 'logo');
        expect(logo.length).toBe(1);
    });

    it('Should renders 1 logo <img>', () => {
        const logo = findByTestAttr(component, 'logo-img');
        expect(logo.length).toBe(1);
    });

    it('Should render proper logo', () => {
        const logo = findByTestAttr(component, 'logo-img');
        expect(logo.find("img").prop("src")).toBe("logo.svg");
    });

});