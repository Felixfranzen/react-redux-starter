import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from './containers/root/index'
import ExamplePage from './containers/examplepage/index'

import styles from './main.scss'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={ExamplePage}></IndexRoute>
  </Route>
)