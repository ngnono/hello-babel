/**
 * Created by lianghongpeng on 2016/10/28.
 */

import React, { Component, PropTypes } from 'react'

class HelloWorld extends React.Component {

  render() {

    const {value, onClick ,payload} = this.props;

    return (<div><span>{value}</span>
      <button onClick={onClick}>hello</button>
    </div>);
  }


}

HelloWorld.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HelloWorld;
