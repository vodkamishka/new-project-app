import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducerDataLoaded from './reducers/loadedReducer';

let reducers = combineReducers({
    data: reducerDataLoaded
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;