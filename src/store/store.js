import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist';

import thunk from 'redux-thunk';

const middleWares = [
    thunk
];

//export const store = createStore(rootReducer, undefined, composedEnchancers);

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persisterReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persisterReducer,
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
    middleware: middleWares,
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store);