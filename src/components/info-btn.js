import React, { Component } from 'react';
import Info from './info';

export default class InfoBtn extends Component {
  constructor(props) {
    super(props);

    this.state = { showInfo: false }

    this.toggleInfo = this.toggleInfo.bind(this);
  }
  toggleInfo() {
    this.setState({ showInfo: !this.state.showInfo });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleInfo} className="btn btn-info">Format Help</button>
        { this.state.showInfo ? <Info /> : null }

      </div>

    )
  }
}
