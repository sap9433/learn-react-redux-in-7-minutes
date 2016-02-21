/* eslint react/self-closing-comp:0 */

import React from 'react';
import { Route } from 'react-router';

import IndexPage from './components/indexPage';

export default (
  <div id="yo">
    <Route path="/" component={IndexPage}/>
  </div>
);
