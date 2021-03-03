import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Web app theme
var docApp      = document.documentElement
var mainColor   = "rgb(165, 147, 15)";

var XDark     = increaseBrightness(mainColor, 1);

var TabDark   = increaseBrightness(mainColor, 20);
var TabDarker = increaseBrightness(mainColor, 17);

var Darker    = increaseBrightness(mainColor, 23);

var Darkest   = increaseBrightness(mainColor, 15);
var textLight = increaseBrightness(mainColor, 5);
var Dark      = increaseBrightness(mainColor, 30);
var Medium    = increaseBrightness(mainColor, 35);

docApp.style.setProperty('--XDark',     XDark);
docApp.style.setProperty('--textLight', textLight);
docApp.style.setProperty('--Darkest',   Darkest);
docApp.style.setProperty('--TabDark',   TabDark);
docApp.style.setProperty('--TabDarker', TabDarker);
docApp.style.setProperty('--Darker',    Darker);
docApp.style.setProperty('--Dark',      Dark);
docApp.style.setProperty('--Medium',    Medium);

function increaseBrightness(color, percent){
  var ctx = document.createElement('canvas').getContext('2d');

  ctx.fillStyle = color;
  ctx.fillRect(0,0,1,1);

  var myColor = ctx.getImageData(0,0,1,1);
  var r = myColor.data[0] + Math.floor( percent / 100 * 255 );
  var g = myColor.data[1] + Math.floor( percent / 100 * 255 );
  var b = myColor.data[2] + Math.floor( percent / 100 * 255 );

  return 'rgb('+r+','+g+','+b+')';
}