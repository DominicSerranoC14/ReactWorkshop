import React from 'react';

class StateApp extends React.Component {
  constructor() {

    super();

    this.state = {
      data: [
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' },
        { id: 3, name: 'Three' }
      ]
    };

  };

  render() {
    return (
       <div>
          <Header/>
          <ul>
            {this.state.data.map((each, i) => <ListItem key={i} data={each} />)}
          </ul>
       </div>
    );
  }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header. I am a single Component</h1>
         </div>
      );
   }
}

class ListItem extends React.Component {
  render() {
    return (
      <li>{this.props.data.id} {this.props.data.name}</li>
    );
  };
};

export default StateApp;
