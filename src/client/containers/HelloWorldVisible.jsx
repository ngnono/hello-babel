/**
 * Created by lianghongpeng on 2016/10/28.
 */

import connect from 'react-redux';

import HelloWorld from '../components/HelloWorld.jsx';
import actionCreateer from '../actions/HelloWorldAction.jsx';

function mapStateToProps(state) {
  return {
    value: state.value
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch({ type: 'helloWorld' })
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);

export default App;
