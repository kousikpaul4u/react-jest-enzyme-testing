import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';
import { findByTestAttr, testPropTypes } from 'utils/TestUtils';

describe('<Button /> component', () => {

    describe('Checking PropTypes', () => {

        it('Should not show warnings', () => {
            const expectedProps = {
                id: "button",
                className: "button",
                type: "submit",
                onClick: () => {

                }
            }
            const propsError = testPropTypes(Button, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {

        const setUp = (props = {}) => {
            return shallow(<Button {...props} />);
        }

        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            component = setUp({
                id: "button",
                className: "button",
                type: "submit",
                onClick: mockFunc
            });
        })

        it('Should render a button', () => {
            const wrapper = findByTestAttr(component, 'button-component');
            expect(wrapper.length).toBe(1);
        })

        it('Should emit callback on click event', () => {
            const button = findByTestAttr(component, 'button-component');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });

    })

});