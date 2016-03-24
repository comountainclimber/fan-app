import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault(); //to prevent default behavior of refresh on form submission
    var loginInput = ReactDOM.findDOMNode(this.refs.login)

    this.props.addCard(loginInput.value);
    loginInput.value = '';

  }

  render() {
    return (
      <div className="text-center">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="github username" ref="login"> </input>
          <button className="btn btn-lg btn-success"> ADD </button>
        </form>
      </div>
    );
  }
};