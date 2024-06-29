import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';

// middlesWares catch action before the hit the store and log them
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// every store needs a root reducer in order to work
// undefined is the second param to make it easier to test as a default state. It is also optional
export const store = createStore(rootReducer, undefined, composedEnhancers);
