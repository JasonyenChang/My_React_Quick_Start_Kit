import React from 'react';
import './app.css';
import { Layout } from 'antd';
import SideMenu from 'components/SideMenu/SideMenu';
import Selector from 'components/Selector/Selector';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  LoadableAboutMe, LoadablePortfolio, LoadableBadge, LoadableCard
} from 'loadables/common';
import { inject, observer } from 'mobx-react';
import * as Styles from './style';
import logout_icon from 'images/logout_icon.png';
import { logout, checkSession } from 'services/Auth';
import { isAuthenticated } from '../services/Auth';

const languageData = [
  { value: 'zhTW', text: '繁體中文' },
  { value: 'enUS', text: 'English' }
];

@inject('translateStore')
@observer
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

  onLanguageChange = (language) => {
    this.props.translateStore.setLanguage(language);
  }

  onLogout = () => {
    logout();
    if (!isAuthenticated()) {
      this.props.history.push('/');
    }
  }

  render() {
    const { translateObj } = this.props.translateStore;
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
            {/* <Styles.MenuCursorIcon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> */}
            <Styles.AppHeaderContent>
              <Styles.AppHeaderContentName>{translateObj.HI}{sessionStorage.getItem('UserName')}</Styles.AppHeaderContentName>
              <Styles.AppHeaderContentLanguage>
                <Selector selectorWidth={110} defaultValue="zhTW" optionList={languageData} onSelectChange={this.onLanguageChange} />
              </Styles.AppHeaderContentLanguage>
              <Styles.AppHeaderContentLogout src={logout_icon} title={translateObj.LOGOUT} onClick={this.onLogout} />
            </Styles.AppHeaderContent>
          </Styles.AppHeader>
          <Styles.MenuContent>
            {
              isAuthenticated() ? 
              <Switch>
                <Route default path="/app/about" component={LoadableAboutMe} />
                <Route path="/app/portfolio" component={LoadablePortfolio} />
                <Route path="/app/badge" component={LoadableBadge} />
                <Route path="/app/card" component={LoadableCard} />
              </Switch>
              : <Redirect to="/" />
            }
          </Styles.MenuContent>
        </Layout>
      </Styles.AppLayout>
    );
  }
}
