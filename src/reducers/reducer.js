import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import itemReducer from './itemReducer'

const reducer = combineReducers({
  menus: menuReducer,
  items: itemReducer
});

export default reducer