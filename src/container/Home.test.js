import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import { findByTestAttr } from '../utils/TestUtils';

const setUp = (props = {}) => {
    return shallow(<Home {...props} />);
}

describe('<Home /> component', () => {

    describe('Have props', () => {

        let component;
        beforeEach(() => {
            component = setUp({
                header: "Welcome to React",
                footer: "All rights reserved."
            });
        })

        it('Should renders 1 home-main-div class', () => {
            const wrapper = findByTestAttr(component, 'home-main-div');
            expect(wrapper.length).toBe(1);
        });

        it('Should renders 1 <Header />', () => {
            const wrapper = findByTestAttr(component, 'header');
            expect(wrapper.length).toBe(1);
        });

        it('Should renders 1 <Footer />', () => {
            const wrapper = findByTestAttr(component, 'footer');
            expect(wrapper.length).toBe(1);
        });

    });

    describe('Have no props', () => {

        let component;
        beforeEach(() => {
            component = setUp({
                header: null,
                footer: null
            });
        })

        it('Should renders 1 header-div class class', () => {
            const wrapper = findByTestAttr(component, 'home-main-div');
            expect(wrapper.length).toBe(1);
        });

        it('Should not renders <Header />', () => {
            const wrapper = findByTestAttr(component, 'header');
            expect(wrapper.length).toBe(0);
        });

        it('Should not renders <Footer />', () => {
            const wrapper = findByTestAttr(component, 'footer');
            expect(wrapper.length).toBe(0);
        });

    });

});