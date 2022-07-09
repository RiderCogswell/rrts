import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  // we dont need to assign a real string
  // to this in redux in theory
  fetchTodos,
  deleteTodo 
}

export type Action = FetchTodosAction | DeleteTodoAction;