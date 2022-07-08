import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  // made color optional
  color?: string;
}

// functional component takes in props and outputs a jsx element
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>
// }

// class App extends React.Component<AppProps> {
//   // we could also set the state without AppState interface with this syntax below
//   // could also be overrode by changing prop names
//   state = { counter: 0 };
//   // we'll use the easy route and avoid constructors
//   // constructor(props: AppProps) {
//   //   super(props);

//   //   this.state = { counter: 0 };
//   // }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 })
//   }
//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <App color="red"/>,
  document.querySelector('#root')
);