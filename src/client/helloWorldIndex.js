/**
 * Created by ngnono on 16-12-29.
 */


import ReactDOM from 'react-dom'
import React from 'react';


import HelloWorld  from './components/HelloWorld.js';


var func = function (e) {
// 可以 plugin....  alert(e);
  console.log(e);
};

/* redux script*/
ReactDOM.render(
  <HelloWorld value='太212' func={func}></HelloWorld>,
  document.getElementById('root')
);
