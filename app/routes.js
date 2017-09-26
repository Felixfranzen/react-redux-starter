import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from './containers/root/index'
import ExamplePage from './containers/examplepage/index'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={ExamplePage}></IndexRoute>
  </Route>
)