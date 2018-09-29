import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router, Route,
  Switch, HashRouter
} from 'react-router-dom';
import { LoadableLogin, LoadableApp } from 'loadables/common';
import 'containers/app.css';

const Main = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={LoadableLogin} />
        <Route path="/app" component={LoadableApp} />
      </Switch>
    </HashRouter>
  </Router>
);

ReactDom.render(<Main />, document.getElementById('app'));
hot(module)(Main);
