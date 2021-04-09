import {combineReducers, createStore} from "redux";
import storeReducer from "./store-reducer";
import constructorReducer from "./constructor-reducer";


let reducers = combineReducers({
    storePage:storeReducer,
    constructorPage:constructorReducer,


})

let store = createStore(reducers)

export default store;