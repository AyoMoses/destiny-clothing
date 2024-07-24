// MEMOIZATION TO AVOID RE-RERENDERING
import { createSelector } from 'reselect';

import { CategoriesState } from './category.reducer';

import { CategoryMap } from './category.types';

import { RootState } from '../store';

// slice the categories from the redux categories state
const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

// THE first is the input and second is what to output
// pass it into the createSelector so it knows what you have sliced and check if it needs to update
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
