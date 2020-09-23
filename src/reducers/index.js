import { combineReducers } from 'redux';
import productosReducer from './prosuctosReducer';

export default combineReducers({
  productos: productosReducer,
});
