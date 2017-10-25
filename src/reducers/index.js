import { combineReducers } from 'redux';
import apiUsers from './apiUsers';
import apiDynamicsRouter from './apiDynamicsRouter';
import apiProducts from './apiProducts';
export default combineReducers({

  apiUsers,
  apiDynamicsRouter,
  apiProducts,
});
