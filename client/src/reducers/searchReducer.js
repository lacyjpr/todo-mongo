import * as actions from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case actions.SET_SEARCH_TEXT:
      return action.payload;
    default:
      return state;
  }
}
