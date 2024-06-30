import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
// import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

// middlesWares catch action before the hit the store and log them
// can replace with the actual logger from redux instead of my customer logger ch updates the DOM events better
const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// every store needs a root reducer in order to work
// undefined is the second param to make it easier to test as a default state. It is also optional
export const store = createStore(rootReducer, undefined, composedEnhancers);
