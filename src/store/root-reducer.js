// needed to combine different reducers into one as an object
import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';

// we pass an object where the keys and values are going to be --- the name of the reducer slice we want and the actual reducer function
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
