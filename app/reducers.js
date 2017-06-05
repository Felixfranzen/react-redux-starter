import { combineReducers } from 'redux'
import counterReducer from  './containers/counter/reducer.js'

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;