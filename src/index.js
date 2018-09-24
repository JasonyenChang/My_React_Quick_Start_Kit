import React from 'react';
import ReactDom from 'react-dom';
import App from 'containers/App';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </Router>
);

ReactDom.render(<Main />, document.getElementById('app'));
hot(module)(Main);
