import React from 'react';


class KeyApp extends React.Component {

  constructor() {
    super();

    this.state = {
      data: [
        { text: "Button 1" },
        { text: "Button 2" },
        { text: "Button 3" }
      ]
    };

  };

  render() {
    return (
      <div>
        {this.state.data.map((each, i) => <Content key={i} propValue={each.text} />)}
      </div>
    )
  };

};

class Content extends React.Component {

  render() {
    return (
      <div>
        <input type="button" value={this.props.propValue} />
      </div>
    )
  }

};

module.exports = KeyApp;
