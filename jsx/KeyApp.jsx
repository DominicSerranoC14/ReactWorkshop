import React from 'react';


class KeyApp extends React.Component {

  constructor() {
    super();

    this.state = {
      data: [
        { text: "Button 1" },
        { text: "Button 2" },
        { text: "Button 3" }
      ],
      h1Data: ''
    };

    this.changeText = this.changeText.bind(this);

  };

  changeText(e) {
    this.setState({ h1Data: e.target.value })
  };

  render() {
    return (
      <div>
        {this.state.data.map((each, i) => <Content key={i} propValue={each.text} changeTextProp={this.changeText} />)}
        <h1>{this.state.h1Data}</h1>
      </div>
    )
  };

};

class Content extends React.Component {

  render() {
    return (
      <div>
        <input type="button" value={this.props.propValue}
        onClick={this.props.changeTextProp} />
      </div>
    )
  }

};

module.exports = KeyApp;
