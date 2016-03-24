import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSlider from 'react-slider';
import AnimationComponent from './AnimationComponent';
var classNames = require('classnames');
var $ = require('jquery');
window.jQuery = $;
window.$ = $;
import classnames from 'classnames';
var Radium = require('radium');
var color = require('color');

// const spin = Radium.keyframes({
//     'from': {
//               transform:'rotate(0deg)'
//             },
//     'to': {
//               transform:'rotate(360deg)'
//           }
// }, 'spin');

// const styles = {
//   dynamicPropeller: {
//     margin: '20px',
//     'background-color': 'purple',
//     'animation-name': spin,
//     'animation-duration': '400ms',
//     'animation-iteration-count': 'infinite',
//     'animation-timing-function': 'linear'
//   }
// };


export default class SliderParent extends React.Component {
  constructor(props) {
    super(props);
    // this.startFan = this.startFan.bind(this)
    this.state = {
      sliderValue: 10000,
      min: 350,
      max: 10000
    }

    this.handleChange = this.handleChange.bind(this);
    // this.getValue = this.getValue.bind(this);
  }

  handleChange(value) {
    console.log(this.state.sliderValue)
    var sliderValue = value
    // this.setState({sliderValue: sliderValue})
    // console.log(value)
    this.setState({sliderValue: sliderValue})
    // console.log()
  }


  render() {
    return (
      <div className="text-center">
        <AnimationComponent 
        className="propeller" 
        propellerSrc="/src/images/animation/2.png"
        // fanSrc="/src/images/animation/1.png"
        fanSpeed = {this.state.sliderValue}
         />
        



        <ReactSlider 
        min={this.state.min} 
        max={this.state.max} 
        defaultValue={this.state.sliderValue} 
        onChange={this.handleChange}  
        className='horizontal-slider'
        // fanSpeed='100ms'
         />
        <h4>{this.state.sliderValue} ms </h4>
      </div>
    );
  }
};

