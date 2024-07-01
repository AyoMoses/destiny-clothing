// pull the data from firebase utils and structure it better in our selector file

import { createSelector } from 'reselect';
// MEMOIZATION TO AVOID RE-RERENDERING
// slice the categories from the redux categories state
const selectCategoryReducer = (state) => state.categories;

// THE first is the input and second is what to output
// pass it into the createSelector so it knows what you have sliced and check if it needs to update
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
