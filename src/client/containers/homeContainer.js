import {connect} from 'react-redux';

import App from '../components/Home.jsx';


/**
 *  state 2 props
 * @param state
 * @returns {{value: number}}
 */
function mapStateToProps(state) {
  let own = state.home || state;
  
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
