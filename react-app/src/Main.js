import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import reactNativeSound from 'react-native-sound'
// import audioPlayer from 'audio-player';

var classNames = require('classnames');
var $ = require('jquery');
window.jQuery = $;
window.$ = $;
import classnames from 'classnames';
import Fans from './Fans'

var Player = require('audio-player');
var player = new Player()

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    // this.startFan = this.startFan.bind(this)

    this.state = {
      fans:[
        { src: '/src/images/1.svg',
          fan: 1,
          isActive: false,
          audio: '/src/audio/1.mp3'
        },
        { src: '/src/images/2.svg',
          fan: 2,
          isActive: false,
          audio: '/src/audio/2.mp3'
        },
        {
          src: '/src/images/3.svg',
          fan: 3,
          isActive: false,
          audio: '/src/audio/3.mp3'
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
    this.playAudio = this.playAudio.bind(this)
  }

  handleClick(fan) {
    this.playAudio(fan)
    var fansArr = this.state.fans;
    // console.log(fansArr)

    for (var i=0;i<fansArr.length;i++) {
      let active = !fansArr[i].isActive

      if (fan === fansArr[i].fan) {
        fansArr[i].isActive = active;
      }

      else{fansArr[i].isActive = false}
    }

    this.setState({fans : fansArr});

  }

  playAudio(fan) {
    console.log(fan)
    if (!this.state.fans[fan-1].isActive) {
      player.play(this.state.fans[fan-1].audio);
    }
    else {player.pause()}
  }

  render() {
    var fans = this.state.fans.map((fan) => {
      return(<Fans key={fan.fan} 
              fanNum={fan.fan} 
              src={fan.src} 
              onClick={this.handleClick}
              isActive={fan.isActive} />);
    })

    return (
      <div>
        {fans}
      </div>
    );
  }
};