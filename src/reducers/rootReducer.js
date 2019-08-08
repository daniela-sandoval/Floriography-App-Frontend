import { combineReducers } from 'redux';
import userReducer from './userReducer'
import bouquetReducer from './bouquetReducer'
import adjReducer from './adjReducer'


export default combineReducers({
  userReducer,
  bouquetReducer,
  adjReducer
})
