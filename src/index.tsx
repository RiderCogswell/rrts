import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  // made color optional
  color?: string;
}

interface AppState {
  counter: number;
}



class App extends React.Component<AppProps, AppState> {
  // we could also set the state without AppState interface with this syntax below
  // state = { counter: 0 };
  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  }
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);