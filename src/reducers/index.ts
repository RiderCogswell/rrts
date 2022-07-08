import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// this validates that todos will not return anything
// but Todos[] just incase ta reducer fails
export interface StoreState {
  todos: Todo[];
}

// combine reducers is a generic function
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
})