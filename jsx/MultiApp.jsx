import React from 'react';

class MultiApp extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
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

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content. I am another Component with multiple elements</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

export default MultiApp;
