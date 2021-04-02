import {combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    authPage: authReducer,
    profilePage:profileReducer

})

let store = createStore(reducers)

export default store;