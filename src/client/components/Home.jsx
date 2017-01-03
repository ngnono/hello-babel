import React, {Component, PropTypes} from 'react'


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {children, title} = this.props;

    return (<div>
      <h1>Home - {title}</h1>
      {children}
    </div>);
  }

}

export default App;


