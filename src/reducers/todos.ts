import { Todo, Action, ActionTypes } from "../actions";
                                
// TA'd reducer
export const  todosReducer = (
  // default value '=[]'
  state: Todo[] = [],
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      // return response data
      return action.payload
    case ActionTypes.deleteTodo:
      // return response data
      return action.
    default:
      return state;
  };
};