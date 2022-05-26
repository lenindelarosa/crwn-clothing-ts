import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, category) => {
                const { title, items } = category;
                acc[title.toLowerCase()] = items;
                return acc;
            }, {})
);

// the library reselect is used to create selectors that use memoization, which means that if a selector's
// information is in memory and the reducer it listends has not changed, the selector returns the latest value 
//without the need of going through the selector once again. 

// This selector is built in blocks, first a reducer and then the proper chain selectors. 