import { createStore } from "redux";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import trackerReducer from "./trackerReducer";

const persistConfig = {
    key: 'trackers',
    storage,
    whitelist: ['tracker']
};

const reducers = persistCombineReducers(persistConfig, { tracker: trackerReducer })

export const store = createStore(reducers);
export const persistor = persistStore(store);