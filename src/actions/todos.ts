import axios from 'axios';
import { Dispatch } from 'redux' 
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos'

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// interface to describe tyhis action, creating reusability
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

// action creater
export const fetchTodos = () => {
  // grap TA from Redux typedef file
  return async (dispatch: Dispatch) => {
    // TA not necessary, just helping TS understand
    // it will receive an array of Todo's
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      // using an enum instead of harcoding is much better practice
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};