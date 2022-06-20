import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import goodsReducer from './modules/goodsCounter'
import stockReducer from './modules/stockCounter'
import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
    reducer:{
        goodsReducer,
        stockReducer
    },
})
console.log(store.getState());

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>,
);