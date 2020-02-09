import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HomePage } from '@/pages/home-page';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);
