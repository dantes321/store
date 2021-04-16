import {combineReducers, createStore} from "redux";
import storeReducer from "./store-reducer";

let reducers = combineReducers({
    storePage: storeReducer,

})

let store = createStore(reducers)

export default store;