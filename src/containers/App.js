import React from 'react';
import './app.css';
import { Layout } from 'antd';
import SideMenu from 'components/SideMenu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import {
  LoadableAboutMe, LoadablePortfolio
} from 'loadables/common';
import * as Styles from './style';

export default class App extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  navigateToUrl = (url) => {
    this.props.history.push(url);
  }

  render() {
    return (
      <Styles.AppLayout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Styles.MenuTitle />
          <SideMenu navigate={this.navigateToUrl} />
        </Layout.Sider>
        <Layout>
          <Styles.AppHeader>
            <Styles.MenuCursorIcon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Styles.AppHeader>
          <Styles.MenuContent>
            <Switch>
              <Route default path="/app/about" component={LoadableAboutMe} />
              <Route path="/app/portfolio" component={LoadablePortfolio} />
            </Switch>
          </Styles.MenuContent>
        </Layout>
      </Styles.AppLayout>
    );
  }
}
