/**
 * Created by lianghongpeng on 2016/10/28.
 */

import React, {Component, PropTypes} from 'react'

/**
 * hello world
 */
class HelloWorld extends Component {

  constructor(props) {
    super(props);

    //init state

    var {value, func} = this.props;

    this.state = {value: value};
    this.onClick = func || this.defaultOnClick.bind(this);
  }

  defaultOnClick(e) {
    console.log('default impl');
    console.log(e);
  }

  render() {

    return (<div><span>{this.state.value}</span>
      <button onClick={this.onClick}>hello</button>
    </div>);
  }


}

HelloWorld.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

HelloWorld.defaultProps = {
  value: '',
  onClick: function (e) {
    "use strict";
    console.log('defaultProps impl');
    console.log(e);
  }
};

export default HelloWorld;
