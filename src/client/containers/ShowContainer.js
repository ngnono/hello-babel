/**
 * Created by ngnono on 17-2-16.
 */

import {connect} from 'react-redux';

import App from '../components/Show.js';
import fetchGet from  '../services/showService';


/**
 *  state 2 props
 * @param state
 * @returns {{value: number}}
 */
function mapStateToProps(state) {
  let own = state.show || state;

  return {
    phoneNum: own.phoneNum
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      "use strict";

      dispatch(fetchGet(ownProps.params.id));

    }
  };
}

const app = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default  app;
