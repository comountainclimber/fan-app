import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AdditionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increase = this.increase.bind(this)
  }

  increase() {
    this.setState({counter:(this.state.counter + parseInt(this.props.number))})
  }

  render() {
    return (
      <div className="text-center">
        <button onClick={this.increase} className="btn-success btn-lg"> 
          <h1>
            + {this.props.number}
          </h1> 
        </button>
        <h2> {this.state.counter} </h2>
      </div>
    );
  }
};
