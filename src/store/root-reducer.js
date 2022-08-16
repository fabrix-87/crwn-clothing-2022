import { combineReducers } from "redux";
import userReducer from "./user/user.slice";
import categoriesReducer from "./categories/categories.slice";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer
});