import React from 'react';
import { Component } from 'react';

class Counter extends Component {
  state= {
    count: 0,

  };
  render() {
    return (
      <div>
        <span>{this.state.count}</span> <br />
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;