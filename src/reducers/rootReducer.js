import { combineReducers } from 'redux';
import userReducer from './userReducer'
import bouquetReducer from './bouquetReducer'
import adjReducer from './adjReducer'
import flowerReducer from './flowerReducer'
import favReducer from './favReducer'


export default combineReducers({
  userReducer,
  bouquetReducer,
  adjReducer,
  flowerReducer,
  favReducer
})
