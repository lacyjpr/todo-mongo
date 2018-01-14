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

  const res = await axios.post('/api/todos', todo);
  const newTodo = res.data.todo;
  console.log('newTodo', newTodo);

  dispatch(fetchTodos());
};
