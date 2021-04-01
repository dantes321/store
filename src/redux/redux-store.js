import {combineReducers, createStore} from "redux";
import authReducer from "./authReducer";

let reducers = combineReducers({
    authPage: authReducer,

})

let store = createStore(reducers)

export default store;