import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

// ROOT REDUCER
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
