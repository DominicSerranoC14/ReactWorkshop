'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App.jsx';
import MultiApp from './jsx/MultiApp.jsx';
import StateApp from './jsx/StateApp.jsx';
import ValPropApp from './jsx/ValPropApp.jsx';
import LifeCycleApp from './jsx/LifeCycleApp.jsx';
import FormApp from './jsx/FormApp.jsx';

// Render App.jsx
// ReactDOM.render(<App />, document.getElementById('app'));

// Render MultiApp.jsx
// ReactDOM.render(<MultiApp />, document.getElementById('app'));

// Render StateApp.jsx
// ReactDOM.render(<StateApp />, document.getElementById('app'));

// Render ValPropApp.jsx
// ReactDOM.render(<ValPropApp />, document.getElementById('app'));

// Render LifeCycleApp.jsx
// ReactDOM.render(<LifeCycleApp />, document.getElementById('app'));

// Render FormApp.jsx
ReactDOM.render(<FormApp />, document.getElementById('app'));
