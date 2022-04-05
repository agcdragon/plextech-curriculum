import Button from './components/Button';
import React from 'react';
import ReactDOM from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  incrementCount() {
    this.state.count += 1;
  }

  decrementCount() {
    this.state.count += 1;
  }

  render() {
    return (
      <div className="container">
        <p>Count: <h2>{this.state.count}</h2></p> 
        <Button title={"+"} task={this.incrementCount}/>
        <Button title={"-"} task={this.decrementCount}/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;