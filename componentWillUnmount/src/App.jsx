import React from 'react';
import './App.css';
import Student from './Student';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true
    };
  }

  render() {
    return (
      <div>
        <h1>Hello! Rohit</h1>

        {
          this.state.show
            ? <Student />
            : <h1>Child Component Removed</h1>
        }

        <button
          onClick={() =>
            this.setState({
              show: !this.state.show
            })
          }
        >
          Toggle Child Component
        </button>
      </div>
    );
  }
}

export default App;