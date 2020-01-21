import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { findByTestAttr, testPropTypes, testStore } from 'utils/TestUtils';
import { exportAllDeclaration } from '@babel/types';

describe('<Login /> component', () => {

    describe('Checking PropTypes', () => {

        it('Should not show warnings', () => {
            const expectedProps = {
                data: [{
                    title: "Koushik Pal",
                    body: "Test",
                }]
            }
            const propsError = testPropTypes(Login, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {

        const setUp = (initialState = {}) => {
            const store = testStore(initialState);
            const wrapper = shallow(<Login store={store} />).childAt(0).dive();
            return wrapper;
        };

        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            component = setUp({
                common: {
                    data: [{
                        title: "Koushik Pal",
                        body: "Test",
                    }]
                }
            });
        })

        it('Should render', () => {
            const wrapper = findByTestAttr(component, 'submit-button');
            expect(wrapper.length).toBe(1);
        })

        it('Should update hideButton state', () => {
            const classInstance = component.instance();
            classInstance.onClick();
            const newState = classInstance.state.hideButton;
            expect(newState).toBe(true);
        });

        // it('Should render', () => {
        //     const wrapper = findByTestAttr(component, 'list-items');
        //     expect(wrapper.length).toBe(1);
        // })

        // it('Should emit callback on click event', () => {
        //     const button = findByTestAttr(component, 'submit-button');
        //     button.simulate('click');
        //     const callback = mockFunc.mock.calls.length;
        //     expect(callback).toBe(1);
        // });

    })

});