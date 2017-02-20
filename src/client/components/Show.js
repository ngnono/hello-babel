/**
 * Created by ngnono on 17-2-16.
 */

import React, {Component, PropTypes} from 'react'
import DocumentMeta from 'react-document-meta';

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

    const {phoneNum, error} = this.props;

    const meta = {
      title: '联系方式'
    };

    let std = (
      <div>
        <DocumentMeta {...meta} />
        <h1>联系方式</h1>
        <span>{phoneNum}</span>
        <a href={"tel:" + String(phoneNum)} title={phoneNum} className="btn btn-info btn-lg">
          <i className="glyphicon glyphicon-earphone"></i>
          拨号
        </a>
      </div>
    );

    let err = (
      <div>
        <DocumentMeta {...meta} />
        <h1>出错了</h1>
        <span>{error}</span>
      </div>
    );


    if (error) {
      return err;
    } else {
      return std;
    }
  }

}

export default Show;
