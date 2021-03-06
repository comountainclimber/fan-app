import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import ReactSlider from 'react-slider';
import SliderParent from './SliderParent';


let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

// ReactDOM.render(
//     <ReactCountdownClock seconds={60}
//                      color="#000"
//                      alpha={0.9}
//                      size={300}
//                      onComplete={function(){console.log('wtf')}} />,
//     document.getElementById("container")
// );

ReactDOM.render(<Main />, document.getElementById('container'));
ReactDOM.render(<SliderParent />, document.getElementById('root'));
