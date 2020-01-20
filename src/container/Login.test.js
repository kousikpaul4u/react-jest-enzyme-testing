import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { findByTestAttr, testPropTypes } from 'utils/TestUtils';

const setUp = (props = {}) => {
    return shallow(<Login {...props} />);
}

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

});