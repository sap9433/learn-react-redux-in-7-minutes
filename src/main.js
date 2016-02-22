import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './lib/store';
import IndexPage from './components/indexPage';

render(
    <div>
      <Provider store={store}>
        <div>
    		<IndexPage/>
  		</div>
      </Provider>
    </div>,
    document.getElementById('content')
);
