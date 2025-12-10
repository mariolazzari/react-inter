import { Component } from "react";

class Button extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log("button mounted");
  }

  render() {
    return (
      <button
        onClick={() => this.setState({ counter: this.state.counter + 1 })}
      >
        {this.props.name} {this.state.counter}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Button name="Mario" />
      </div>
    );
  }
}

export default App;
