import { types } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.SET_SUCCESS:
            return { ...state, success: action.payload };
        case types.SET_ERROR:
            return { ...state, error: action.payload };
        case types.SET_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};