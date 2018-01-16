import * as actions from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case actions.FETCH_TODOS:
      return action.resData;
    case actions.ADD_NEW_TODO:
      return [...state, action.newTodo];
    case actions.UPDATE_TODO:
      return state.map(todo => {
        if (todo._id === action._id) {
          return { ...todo, ...action.updates };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}
