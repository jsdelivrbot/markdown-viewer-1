import React, { Component } from 'react';
import InfoBtn from './info-btn';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        userText: '',
      }

      this.changeText = this.changeText.bind(this);
    }
    changeText(event) {
      this.setState({ userText: event.target.value })
    }
    createMarkup() {
      return {__html: <p>hi</p>};
    }

    render() {
    var marked = require('marked');
      return (
        <div id="container">

          <h1>Markdown Previewer</h1>

            <div className="col-md-6">
              <h4>Enter text:</h4>
              <textarea onChange={this.changeText}></textarea>

            </div>

            <div className="col-md-6">
              <h4>Preview:</h4>
              <div dangerouslySetInnerHTML={{ __html: marked(this.state.userText) }} />
            </div>

            <div className="col-md-12">
              <InfoBtn />
            </div>

        </div>
      )
    }

}
