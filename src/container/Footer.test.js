import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { findByTestAttr } from '../utils/TestUtils';

const setUp = (props = {
    message: "All rights reserved."
}) => {
    return shallow(<Footer {...props} />);
}

describe('<Footer /> component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should renders 1 footer-div class', () => {
        const wrapper = findByTestAttr(component, 'footer-div');
        expect(wrapper.length).toBe(1);
    });

    it('Should footer-div having text "All rights reserved."', () => {
        const wrapper = findByTestAttr(component, 'footer-div');
        expect(wrapper.text()).toBe("All rights reserved.");
    });

});