/**
 * Created by ngnono on 16-12-30.
 */

import {connect} from 'react-redux';
import Counter from '../components/Counter.jsx';


/**
 *  state 2 props
 * @param state
 * @returns {{value: number}}
 */
function mapStateToProps(state) {

  let own = state.counter || state;

  return {
    count: own.count,
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
    /**
     * event increase
     */
    onIncreaseClick: () => dispatch(counterAction.increase),
    /**
     * event decrease
     */
    onDecreaseClick: () => dispatch(counterAction.decrease)
  }
}

/**
 * action
 * @type {{increase: {type: string}}}
 */
const counterAction = {
  /**
   * +
   */
  increase: {
    type: 'increase'
  },
  /**
   * -
   */
  decrease: {
    type: 'decrease'
  }

};

const app = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default  app;
