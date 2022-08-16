import { createSlice } from "@reduxjs/toolkit"

const INITAL_STATE = {
    categories: [],
    categoriesLoaded: false,
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITAL_STATE,
    reducers:{
        setCategories: (state, action) =>{
            state.categories = action.payload;
        },
        setCategoriesLoaded: (state) => {
            state.categoriesLoaded = true
        }
    }
})

export const {setCategoriesLoaded, setCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;