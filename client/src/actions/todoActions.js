import axios from 'axios';
import { FETCH_TODOS, ADD_NEW_TODO, UPDATE_TODO, DELETE_TODO } from './types';

export const fetchTodos = () => async dispatch => {
  const res = await axios.get('/api/todos');
  const resData = res.data;
  dispatch({ type: FETCH_TODOS, resData });
};

export const addNewTodo = newTodo => {
  return { type: ADD_NEW_TODO, newTodo };
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

  dispatch(addNewTodo(newTodo));
};

export const updateTodo = (_id, updates) => {
  return { type: UPDATE_TODO, _id, updates };
};

export const startToggleTodo = (_id, completed) => dispatch => {
  const updates = {
    _id,
    completed,
    completedAt: Date.now(),
  };
  axios.put('/api/todos', updates);
  dispatch(updateTodo(_id, updates));
};

export const startSaveEditedTodo = (_id, item) => dispatch => {
  const updates = {
    _id,
    item,
    edited: true,
    editedAt: Date.now(),
  };
  axios.put('/api/todos', updates);
  dispatch(updateTodo(_id, updates));
};

export const deleteTodo = _id => {
  return { type: DELETE_TODO, _id };
};

export const startDeleteTodo = _id => async dispatch => {
  const res = await axios.delete(`/api/todos/${_id}`);
  dispatch(deleteTodo(_id));
  const deletedTodo = res.data;
  console.log(deletedTodo);
};
