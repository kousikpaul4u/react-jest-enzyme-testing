import React from 'react';
import { shallow } from 'enzyme';
import ListItems from './ListItems';
import { findByTestAttr, testPropTypes } from 'utils/TestUtils';

describe('<ListItems /> component', () => {

    describe('Checking PropTypes', () => {

        it('Should not show warnings', () => {
            const expectedProps = {
                title: "test",
                desc: "test"
            }
            const propsError = testPropTypes(ListItems, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {

        const setUp = (props = {}) => {
            return shallow(<ListItems {...props} />);
        }

        let component;
        beforeEach(() => {
            component = setUp({
                title: "test",
                desc: "test"
            });
        })

        it('Should render a button', () => {
            const wrapper = findByTestAttr(component, 'list-items-component');
            expect(wrapper.length).toBe(1);
        })

    })

});