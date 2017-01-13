'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './jsx/App.jsx';
import MultiApp from './jsx/MultiApp.jsx';
import StateApp from './jsx/StateApp.jsx';
import ValPropApp from './jsx/ValPropApp.jsx';
import LifeCycleApp from './jsx/LifeCycleApp.jsx';
import FormApp from './jsx/FormApp.jsx';
import EventApp from './jsx/EventApp.jsx';
import KeyApp from './jsx/KeyApp.jsx';
import { RouterApp, Home, About, Contact } from './jsx/RouterApp.jsx';

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
// ReactDOM.render(<FormApp />, document.getElementById('app'));

// Render EventApp.jsx
// ReactDOM.render(<EventApp />, document.getElementById('app'));

// Render KeyApp.jsx
// ReactDOM.render(<KeyApp />, document.getElementById('app'));

ReactDOM.render((
   <Router history={browserHistory}>
      <Route path="/" component={RouterApp}>
         <IndexRoute component={Home} />
         <Route path="home" component={Home} />
         <Route path="about" component={About} />
         <Route path="contact" component={Contact} />
      </Route>
   </Router>

), document.getElementById('app'))
