import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  componentDidMount() {
    var component = this;
    $.get("https://api.github.com/users/" + this.props.login, function(data){
      component.setState(data)
    })
  }

  render() {
    return (
      <div className="text-center card">
        <img src={this.state.avatar_url} width="200" />
        <h1> {this.state.login}  </h1>
        <h3> {this.state.name} </h3>
        <h5> Followers: {this.state.followers} </h5>
        <h5> Following: {this.state.following} </h5>
        <h5> Public Repositories: {this.state.public_repos} </h5>
      </div>
    );
  }
};

