import { combineReducers, createStore } from 'redux';
import storeReducer from './store-reducer';
import originalBoxReducer from './originalBox-reducer';

const reducers = combineReducers({
  storePage: storeReducer,
  originalBoxPage: originalBoxReducer,
});

const store = createStore(reducers);

export default store;
