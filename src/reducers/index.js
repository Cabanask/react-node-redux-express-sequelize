import { combineReducers } from 'redux';
import apiMarvel from './apiMarvel';
import apiUsers from './apiUsers';
export default combineReducers({

  apiMarvel,
  apiUsers,
});
