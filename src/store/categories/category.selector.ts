import { createSelector } from 'reselect';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';
import { RootState } from '../store';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMap =>
        categories.reduce((acc, category) => {
                const { title, items } = category;
                acc[title.toLowerCase()] = items;
                return acc;
            }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);

// the library reselect is used to create selectors that use memoization, which means that if a selector's
// information is in memory and the reducer it listends has not changed, the selector returns the latest value 
//without the need of going through the selector once again. 

// This selector is built in blocks, first a reducer and then the proper chain selectors. 