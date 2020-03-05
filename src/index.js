import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import * as reducers from './reducers';

// Storeの作成
const store = createStore(
    combineReducers(reducers),
    applyMiddleware(logger)
);

ReactDOM.render(
    // StoreをAppコンポーネントに紐づけ
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);