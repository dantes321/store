import {combineReducers, createStore} from "redux";
import storeReducer from "./store-reducer";
import originalBoxReducer from "./originalBox-reducer";

let reducers = combineReducers({
    storePage: storeReducer,
    originalBoxPage:originalBoxReducer,


})

let store = createStore(reducers)

export default store;