import { createStore, combineReducers } from 'redux';

import reducerDataLoaded from './reducers/loadedReducer';
import showModalWindows from './reducers/modalReducers'

let reducers = combineReducers({
    data: reducerDataLoaded,
    windows: showModalWindows
})

const store = createStore(reducers);

export default store;