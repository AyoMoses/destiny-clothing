import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

import { getCatgoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () => {
  // lets the reducer know and set isLoading: true
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
};

export const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

// create thunk asyn function
// a function that returns a function that gets a dispatch (thunk)
export const fetchCategoriesAsync = () => async (dispatch) => {
  // how we fetch our categories
  // what to do when it fails/succeeds
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCatgoriesAndDocuments('categories');
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
