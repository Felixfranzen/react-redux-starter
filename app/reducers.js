import { combineReducers } from 'redux'
import counter from './containers/examplepage/reducers'

const rootReducer = combineReducers({
  counter: counter
})

export default rootReducer