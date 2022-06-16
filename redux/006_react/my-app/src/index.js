import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화 // 스토어를 만듭니다.
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);