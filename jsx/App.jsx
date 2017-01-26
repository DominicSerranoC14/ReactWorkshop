'use strict';

import React from 'react';

class App extends React.Component {

  render() {
    {/*How to style with React. Using inline method*/}
    const mainStyle = { border: 'black solid 2px', textAlign: 'center' };

    {/*to render multiple elements they must be */}
    {/*wrapped in a container element */}
    return (
       <div style={mainStyle}>
          {/*This is how you write comments inside a nested div*/}
          <h1>Hello World!!!</h1>
          <h3>Hello World!!!</h3>
          <p>Random number {Math.floor(Math.random() * 10)}</p>
          <p>-------------</p>
          <p>Using a ternary: (cannot use if statements):</p>
          <p>Is the current date an even number? {(Date().slice(8, 10) % 2) ? <b>Yes</b>: <b>No</b>}</p>
          <p>Is the current date an odd number? {(Date().slice(8, 10) % 1) ? <b>Yes</b>: <b>No</b>}</p>
          <p>-------------</p>
       </div>
    );
  }
}

export default App;
