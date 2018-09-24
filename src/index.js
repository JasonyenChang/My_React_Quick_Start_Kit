import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadableLogin, LoadableApp } from 'loadables/common';

const Main = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LoadableLogin} />
      <Route path="/app" component={LoadableApp} />
    </Switch>
  </Router>
);

ReactDom.render(<Main />, document.getElementById('app'));
hot(module)(Main);
