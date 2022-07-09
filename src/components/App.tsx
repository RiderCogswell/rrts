import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todo: Todo[];
  fetchTodos: typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
}

export class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number) : void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todo.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }
}

// destructure todos out of state and set it equal to itself
const mapStateToProps = ({ todo }: StoreState): { todo: Todo[] } => {
  return { todo };
};

// first parentheses is for configuration, second is for the connected component
export const App = connect( mapStateToProps, { fetchTodos, deleteTodo })(_App)