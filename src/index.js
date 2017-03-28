import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const persistedState = localStorage.getItem(' _username_recipes') ? JSON.parse(localStorage.getItem(' _username_recipes')) : {}

const store = createStore(reducer, persistedState);
store.subscribe(()=>{
  localStorage.setItem(' _username_recipes', JSON.stringify(store.getState()))
})
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
