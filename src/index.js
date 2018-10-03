import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader';
import {
  Route, Switch, HashRouter
} from 'react-router-dom';
import { LoadableLogin, LoadableApp } from 'loadables/common';
import 'containers/app.css';
import { Provider } from 'mobx-react';
import translateStore from 'stores/translateStore';

const Main = () => (
  <Provider translateStore={translateStore}>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={LoadableLogin} />
        <Route path="/app" component={LoadableApp} />
      </Switch>
    </HashRouter>
  </Provider>
);

ReactDom.render(<Main />, document.getElementById('app'));
hot(module)(Main);
