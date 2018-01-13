import axios from 'axios';
import { FETCH_TODOS } from './types';

export const fetchTodos = () => async dispatch => {
  const res = await axios.get('/api/todos');

  dispatch({ type: FETCH_TODOS, payload: res.data });
};

export const addTodo = item => async dispatch => {
  const todo = {
    item,
    createdAt: Date.now(),
    completed: false,
    completedAt: null,
    edited: false,
    editedAt: null,
  };

  await axios.post('/api/todos', todo);
  dispatch(fetchTodos());
};
