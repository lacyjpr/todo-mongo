import { SET_SEARCH_TEXT, TOGGLE_SHOW_COMPLETED } from './types';

export const setSearchText = searchText => {
  return {
    type: SET_SEARCH_TEXT,
    payload: searchText,
  };
};

export const toggleShowCompleted = () => {
  return {
    type: TOGGLE_SHOW_COMPLETED,
  };
};
