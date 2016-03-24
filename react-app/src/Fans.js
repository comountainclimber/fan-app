import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
var classNames = require('classnames');

export default class Fans extends React.Component {
  render() {
    let classes = classnames('fan-image', {selected: this.props.isActive});
    return (
      <img 
      src={this.props.src} 
      fanNum={this.props.key} 
      onClick={ (e) => {
        this.props.onClick(this.props.fanNum)
      }}
      className={classNames('fan-image', {selected: this.props.isActive})}/>
    );
  }
};