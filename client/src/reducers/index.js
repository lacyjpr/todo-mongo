import { combineReducers } from 'redux';

import authReducer from './authReducer';
import todosReducer from './todosReducer';
import searchReducer from './searchReducer';

export default combineReducers({ authReducer, todosReducer, searchReducer });
