import Button from './components/Button';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  incrementCount = () => {
    this.setState(
      {count: this.state.count + 1}
      );
  }

  decrementCount = () => {
    this.setState(
      {count: this.state.count - 1}
      );
  }

  render() {
    return (
      <div className="App">
        <head>
          <title>React Intro</title>
        </head>
        <p>Count: </p> 
        <h2>{this.state.count}</h2>
        <Button title={"+"} task={this.incrementCount}/>
        <Button title={"-"} task={this.decrementCount}/>
      </div>
    );
  }
}

export default App;