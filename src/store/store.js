import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import { logger } from 'redux-logger';


// every store needs a root reducer in order to work
