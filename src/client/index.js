/**
 * Created by lianghongpeng on 2016/10/17.
 * http://reactjs.cn/react/docs/getting-started-zh-CN.html
 * http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html
 */

import ReactDOM from 'react-dom'
import React from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import './styles/main.css';


// import Counter  from './components/Counter.jsx';

import reducers from './reducers/index';

const logger = createLogger();

//初始化 state
const initial_state = {
  counter: {count: -1, title: '计数器'},
  app: {title: ''},
  home: {title: ''},
  show: {phoneNum: ''}
};

let store = createStore(combineReducers(reducers), initial_state, applyMiddleware(thunkMiddleware, logger));

const history = syncHistoryWithStore(hashHistory, store);

import routes from './routes';


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
    <Router routes={routes} history={history}/>
  </Provider>,
  document.getElementById('root')
);

