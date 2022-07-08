import axios from 'axios';
import { Dispatch } from 'redux' 
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// interface to describe tyhis action, creating reusability
interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
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