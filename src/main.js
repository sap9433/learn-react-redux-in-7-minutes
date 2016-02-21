import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import store from './lib/store';

render(
    <div>
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    </div>,
    document.getElementById('content')
);
