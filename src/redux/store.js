import { combineReducers, createStore } from "redux";
import trackerReducer from "./trackerReducer";

const reducers = combineReducers({
    tracker: trackerReducer
})

export const store = createStore(reducers);