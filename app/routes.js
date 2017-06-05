import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Parent from "./containers/parent/parent.js";
import Child from "./containers/child/child.js";
import Test from "./containers/test/test.js";
import Counter from './containers/counter/index.js'

import styles from './main.scss';

export default (
  <Route path="/" component={Parent}>
    <IndexRoute component={Child}></IndexRoute>
    <Route path="/counter" component={Counter}></Route>
    <Route path="/:id" component={Test}></Route>
  </Route>

);