import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import localforage from "localforage";

import posts from "./posts";

const persistConfig = {
    key: "root",
    storage: localforage,
    whitelist: ["posts"]
}

const rootReducer = combineReducers({posts});

export default persistReducer(persistConfig, rootReducer);