import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todo: Todo[];
  fetchTodos(): any;
}

export class _App extends React.Component<AppProps> {
  render() {
    return (
      <></>
    )
  }
}

// destructure todos out of state and set it equal to itself
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

// first parentheses is for configuration, second is for the connected component
export const App = connect( mapStateToProps, { fetchTodos })(_App)