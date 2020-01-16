import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from 'reducers/index';
import { middlewares } from '../createStore';

export const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}

export const testPropTypes = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(RootReducer, initialState);
}