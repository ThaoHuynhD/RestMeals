import { combineReducers, createStore } from "redux";
import headerReducer from "./headerReducer";

const rootReducer = combineReducers(
    {
        headerReducer: headerReducer,
    })
export const store = createStore(rootReducer);