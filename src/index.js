import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Index.scss'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
