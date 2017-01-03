/**
 * Created by lianghongpeng on 2016/10/31.
 */
import React, {Component, PropTypes} from 'react'

class Counter extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    const {title, count, onIncreaseClick, onDecreaseClick} = this.props;


    return (
      <div>
        <h1>{title}</h1>
        <h2>{count}</h2>
        <button onClick={onIncreaseClick}>+</button>
        <button onClick={onDecreaseClick}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired
};

export default Counter;
