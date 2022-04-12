import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';

import App from './App';
import { store } from '@frontend/shared/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
