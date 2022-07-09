import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todo: Todo[];
  // do not do this in pracice, this is a bad idea and is only necessary here because it is not worth it telling typescript what react-thunk is
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false }
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todo.length && this.props.todo.length) {
      this.setState({ fetching: false })
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true })
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
        {this.state.fetching ? 'LOADING' : null}
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