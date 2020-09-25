import { combineReducers } from 'redux'
import CounterReducer from './counterReducer'




const JoinedReducers = combineReducers({
  count: CounterReducer,
})



export default JoinedReducers