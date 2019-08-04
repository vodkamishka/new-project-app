import React from 'react';
import ReactDOM from 'react-dom';
import App from './components//app/app';

import { Provider } from 'react-redux';
import store from './store';
import { ApiDataServiceProvider } from './components/api-data-context/api-data-context';

import DataTableService from './services/table-data-service';

let data = new DataTableService();


ReactDOM.render(
    <Provider store={store}>
        <ApiDataServiceProvider value = {data}>
            <App />
        </ApiDataServiceProvider>
    </Provider>
    , document.getElementById('root'));


