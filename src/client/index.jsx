/**
 * Created by lianghongpeng on 2016/10/17.
 */


import {createStore} from 'redux';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import reducer from './reducers/HelloWorldReducer.jsx';


const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
