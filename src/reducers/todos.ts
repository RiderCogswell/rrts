import { Todo, Action, ActionTypes } from "../actions";
                                
// default value '=[]'
export const  todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {  
    case ActionTypes.fetchTodos:
      // return response data
      return action.payload
    case ActionTypes.deleteTodo:
      // filter through state by id and return the todos without the one withthe appropriate id
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  };
};