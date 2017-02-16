/**
 * Created by ngnono on 17-2-16.
 */

import React, {Component, PropTypes} from 'react'


/**
 * 显示
 */
class Show extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const {onClick} = this.props;

    onClick();
  }

  render() {

    const {phoneNum, onClick} = this.props;

    return (
      <div>
        <h1>{phoneNum}</h1>
        <a href={"tel:" + String(phoneNum)} title={phoneNum}>拨号</a>
        <button onClick={onClick}>client</button>
      </div>
    );
  }

}

export default Show;
