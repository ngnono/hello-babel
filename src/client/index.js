/**
 * Created by lianghongpeng on 2016/10/17.
 * http://reactjs.cn/react/docs/getting-started-zh-CN.html
 * http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html
 */

import ReactDOM from 'react-dom'
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import {Provider} from 'react-redux';

const logger = createLogger();

// import Counter  from './components/Counter.jsx';
import Counter from './containers/counterContainer.js';
import counterReducer from './reducers/counterReducer';

//初始化 state
const initial_state = {count: -1,title:'计数器'};

var store = createStore(counterReducer, initial_state, applyMiddleware(promiseMiddleware, logger));

// function onIncreaseClick(e) {
//   "use strict";
//
//   store.dispatch({type: 'increase'});
// }
//
// function onDecreaseClick(e) {
//   "use strict";
//
//   store.dispatch({type: 'decrease'});
// }

/* redux script*/
// const render = () => {
//   ReactDOM.render(
//     <Counter title="计数器" value={store.getState()} onIncreaseClick={onIncreaseClick}
//              onDecreaseClick={onDecreaseClick}></Counter>,
//     document.getElementById('root')
//   );
// };
//
// render();

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

