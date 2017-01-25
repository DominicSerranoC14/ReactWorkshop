import React from 'react';

class EventApp extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: 'Initial data...',
         num: 0
      }

      this.updateState = this.updateState.bind(this);

   };

  updateState() {
    this.setState({data: 'Data updated this many times ->', num: this.state.num + 1})
  }

   render() {
      return (
         <div>
            <Content updateStateProp={this.updateState} propData={this.state} />
         </div>
      );
   }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <button onClick = {this.props.updateStateProp}>CLICK</button>
        <h4>{this.props.propData.data}  {this.props.propData.num}</h4>
      </div>
    )
  };
};

export default EventApp;
