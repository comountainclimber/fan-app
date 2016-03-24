import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
var classNames = require('classnames');

export default class AnimationComponent extends React.Component {
  render() {

  let fanSpeed = this.props.fanSpeed
  fanSpeed = fanSpeed.toString() + 'ms'
  console.log(fanSpeed)

    return (
      <div>
      <img
      src={this.props.fanSrc}
      />

      <img 
      src={this.props.propellerSrc} 
      className="propeller"
      style={{
        'animationDuration': fanSpeed
      }}
      />
      </div>
    );
  }
};