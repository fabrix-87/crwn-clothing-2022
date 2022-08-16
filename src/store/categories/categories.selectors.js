import { createSelector } from "@reduxjs/toolkit";

export const getCategoriesMap = createSelector(
    [state => state.categories.categories],
    (categories) => categories.reduce( (acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);


export const getCategoriesLoaded = (state) => state.categories.categoriesLoaded;