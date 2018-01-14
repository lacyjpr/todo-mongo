import { combineReducers } from 'redux';

import authReducer from './authReducer';
import todosReducer from './todosReducer';
import searchReducer from './searchReducer';
import showCompletedReducer from './showCompletedReducer';

export default combineReducers({
  authReducer,
  todosReducer,
  searchReducer,
  showCompletedReducer,
});
