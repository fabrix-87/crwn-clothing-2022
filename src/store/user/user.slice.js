import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    currentUser: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const {setCurrentUser} = userSlice.actions;
export default userSlice.reducer;