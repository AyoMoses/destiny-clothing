import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';

import { thunk } from 'redux-thunk';

// import { logger } from 'redux-logger';
import { loggerMiddleware } from './middleware/logger';

import { rootReducer } from './root-reducer';

// local storage
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

// PERSIST STORAGE ON LOCAL STORAGE WITH REDUX PERSIST
const persistConfig = {
  key: 'root',
  storage: storage, //shorthand is storage
  blacklist: ['user'], // from the root reducer, we blacklist user from being stored
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// middlesWares catch action before the hit the store and log them
// can replace with the actual logger from redux instead of my customer logger ch updates the DOM events better
// apply middleware only in development and filter it out if its false
// if we are not in production, apply logger
const middleWares = [
  process.env.NODE_ENV !== 'production' && loggerMiddleware, thunk
].filter(Boolean); // filter out if its not true

// REACT DEVTOOL SETUP
// if redux devtool fails then we use the regular compose
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// every store needs a root reducer in order to work
// undefined is the second param to make it easier to test as a default state. It is also optional
// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);
