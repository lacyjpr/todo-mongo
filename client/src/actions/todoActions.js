import axios from 'axios';
import { FETCH_TODOS, ADD_NEW_TODO, UPDATE_TODO } from './types';

export const fetchTodos = () => async dispatch => {
  const res = await axios.get('/api/todos');

  dispatch({ type: FETCH_TODOS, payload: res.data });
};

export const addNewTodo = newTodo => {
  return { type: ADD_NEW_TODO, payload: newTodo };
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

  dispatch(addNewTodo(newTodo));
};

export const updateTodo = (_id, updates) => {
  return { type: UPDATE_TODO, payload: _id, updates };
};

export const startToggleTodo = (_id, completed) => async dispatch => {
  const updates = {
    _id,
    completed,
    completedAt: Date.now(),
  };
  console.log(updates);
  const res = await axios.put('/api/todos', updates);
  dispatch(updateTodo(_id, updates));
  console.log(res);
  const updatedTodo = res.data.updates;
  console.log(updatedTodo);
};
