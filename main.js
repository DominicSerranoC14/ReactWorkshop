'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App.jsx';
import MultiApp from './jsx/MultiApp.jsx';
import StateApp from './jsx/StateApp.jsx';

// Render App.jsx
// ReactDOM.render(<App />, document.getElementById('app'));

// Render MultiApp.jsx
// ReactDOM.render(<MultiApp />, document.getElementById('app'));

// Render StateApp.jsx
ReactDOM.render(<StateApp />, document.getElementById('app'));
