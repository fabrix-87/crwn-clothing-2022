import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleWares = [
    logger
];

//export const store = createStore(rootReducer, undefined, composedEnchancers);

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
})