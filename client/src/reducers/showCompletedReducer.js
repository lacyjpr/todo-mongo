import * as actions from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case actions.TOGGLE_SHOW_COMPLETED:
      return !state;
    default:
      return state;
  }
}
