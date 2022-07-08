import { Todo, FetchTodosAction } from "../actions";
import { ActionTypes } from "../actions/types";
                                
// TA'd reducer
export const  todosReducer = (
  // default value '=[]'
  state: Todo[] = [],
  action: FetchTodosAction
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      // return response data
      return action.payload
    default:
      return state;
  };
};