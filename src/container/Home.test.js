import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import { findByTestAttr, testPropTypes } from '../utils/TestUtils';

const setUp = (props = {}) => {
    return shallow(<Home {...props} />);
}

describe('<Home /> container', () => {

    describe('Checking PropTypes', () => {

        it('Should not show warnings', () => {
            const expectedProps = {
                header: "Test Header",
                footer: "Test Footer",
                tempArr: [{
                    name: "Koushik Pal",
                    age: 32,
                    onlineStatus: true
                }]
            }
            const propsError = testPropTypes(Home, expectedProps);
            expect(propsError).toBeUndefined();
        });

        it('Should show warnings for tempArr.age', () => {
            const expectedProps = {
                header: "Test Header",
                footer: "Test Footer",
                tempArr: [{
                    name: "Koushik Pal",
                    age: "Some string",
                    onlineStatus: true
                }]
            }
            const propsError = testPropTypes(Home, expectedProps);
            expect(propsError).toEqual("Failed props type: Invalid props `tempArr[0].age` of type `string` supplied to `Home`, expected `number`.");
        });

    });

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