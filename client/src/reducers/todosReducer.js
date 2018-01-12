import * as actions from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case actions.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
}
