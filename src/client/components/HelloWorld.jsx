/**
 * Created by lianghongpeng on 2016/10/28.
 */


import React from 'react';

class HelloWorld extends React.Component {

  render() {

    const {value, onClick} = this.props;

    return <div><span>{value}</span>
      <button onClick={onClick}>hello</button>
    </div>
  }


}

export default HelloWorld;
