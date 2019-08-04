import { createStore, combineReducers } from 'redux';

import reducerDataLoaded from './reducers/loadedReducer';

let reducers = combineReducers({
    data: reducerDataLoaded
})

const store = createStore(reducers);

export default store;