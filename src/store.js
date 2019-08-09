import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/reducer';

let reducers = combineReducers({
    data: reducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;