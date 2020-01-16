import { types } from '../actions/types';
import commonReducer from './common';

describe('Common Reducer', () => {

    it('Should return initial state', () => {
        const newState = commonReducer(undefined, {});
        expect(newState).toEqual({});
    });

    it('Should return new state if SET_SUCCESS triggered', () => {
        const payload = true;
        const newState = commonReducer(undefined, {
            type: types.SET_SUCCESS,
            payload: payload
        });
        expect(newState).toEqual({ success: payload });
    });

    it('Should return new state if SET_ERROR triggered', () => {
        const payload = true;
        const newState = commonReducer(undefined, {
            type: types.SET_ERROR,
            payload: payload
        });
        expect(newState).toEqual({ error: payload });
    });

    it('Should return new state if SET_DATA triggered', () => {
        const payload = [{
            name: "A",
            onlineStatus: true
        },
        {
            name: "B",
            onlineStatus: true
        }];
        const newState = commonReducer(undefined, {
            type: types.SET_POSTS,
            payload: payload
        });
        expect(newState).toEqual({ data: payload });
    });

})