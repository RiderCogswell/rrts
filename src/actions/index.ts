import axios from 'axios';
import { Dispatch } from 'redux' 

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  // grap TA from Redux typedef file
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data
    })
  }
}