import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';
import logger from "redux-logger";

export const middleWares = [logger, ReduxThunk];

export const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore);

export const store = createStoreWithMiddleWare(RootReducer);