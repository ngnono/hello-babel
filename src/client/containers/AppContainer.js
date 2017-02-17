/**
 * Created by ngnono on 17-1-3.
 */

import {connect} from 'react-redux';

import App from '../components/App.jsx';


/**
 *  state 2 props
 * @param state
 * @returns {{value: number}}
 */
function mapStateToProps(state) {
  let own = state.app || state;

  return {
    title: own.title
  };
}

/**
 * action to props
 * @param dispatch
 * @returns {{onIncreaseClick: (function(): *), onDecreaseClick: (function(): *)}}
 */
function mapDispatchToProps(dispatch) {
  return {
    default: () => dispatch(action.default)
  };
}

/**
 * action
 * @type {{increase: {type: string}}}
 */
const action = {
  /**
   * +
   */
  default: {
    type: 'default'
  }

};

const app = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default  app;
