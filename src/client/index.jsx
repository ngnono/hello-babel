/**
 * Created by lianghongpeng on 2016/10/17.
 */


import {createStore} from 'redux';
import ReactDOM from 'react-dom'
import {Provider,connect} from 'react-redux'
import React from 'react';


import reducer from './reducers/HelloWorldReducer.jsx';
import App from './containers/HelloWorldVisible.jsx';


const store = createStore(reducer);

/* Counter
// import  counter from './reducers/CounterReducer.jsx';
// import Counter from './components/Counter.jsx';
//
// const store = createStore(counter);
// import increaseAction from './actions/CounterAction.jsx';
//
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }
//
// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }
//
// // Connected Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

