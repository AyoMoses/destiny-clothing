import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES, Category } from './category.types';

export type fetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type fetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type fetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

// THE ONLY TYPE WE ALLOW AFTER THE UNION
export type categoryAction =
  | fetchCategoriesStart
  | fetchCategoriesSuccess
  | fetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher((): fetchCategoriesStart => {
  // lets the reducer know and set isLoading: true
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
});

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): fetchCategoriesSuccess => {
    return createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    );
  }
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): fetchCategoriesFailed => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
  }
);
