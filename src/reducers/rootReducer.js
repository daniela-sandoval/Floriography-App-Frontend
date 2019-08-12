import { combineReducers } from 'redux';
import userReducer from './userReducer'
import bouquetReducer from './bouquetReducer'
import adjReducer from './adjReducer'
import flowerReducer from './flowerReducer'


export default combineReducers({
  userReducer,
  bouquetReducer,
  adjReducer,
  flowerReducer
})
