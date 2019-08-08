import { combineReducers } from 'redux';
import userReducer from './userReducer'
import bouquetReducer from './bouquetReducer'


export default combineReducers({
  userReducer,
  bouquetReducer
})
