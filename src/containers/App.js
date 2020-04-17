import React from 'react';
import './app.css';
import { Layout } from 'antd';
import SideMenu from 'components/SideMenu/SideMenu';
import Selector from 'components/Selector/Selector';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  LoadableAboutMe, LoadablePortfolio, LoadableBadge, LoadableCard, LoadableRing,
  LoadableMixChart
} from 'loadables/common';
import { inject, observer } from 'mobx-react';
import * as Styles from './style';
import logout_icon from 'images/logout_icon.png';
import { pageSync, logout } from 'services/Auth';
import env from 'utils/env';
import ReactGA from 'react-ga';

const languageData = [
  { value: 'zhTW', text: '繁體中文' },
  { value: 'enUS', text: 'English' }
];

@inject('translateStore')
@observer
export default class App extends React.Component {
  state = {
    collapsed: false,
    userName: ''
  };

  componentDidMount = () => {
    pageSync();
    if (env.ENABLE_GA) this.initialGA();
    setTimeout(() => {
      const user = JSON.parse(sessionStorage.getItem('User'));
      this.setState({ userName: user.UserName });
    }, 500);
  }

  initialGA = () => {
    const { history, location } = this.props;
    ReactGA.initialize(env.GA_ID, { debug: true });
    ReactGA.pageview(location.pathname);
    history.listen(l => ReactGA.pageview(l.pathname));
  }

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

  render() {
    const { translateObj } = this.props.translateStore;
    const { userName } = this.state;
    return (
      <Styles.AppLayout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Styles.MenuTitle />
          <SideMenu navigate={this.navigateToUrl} collapsed ={this.state.collapsed} />
        </Layout.Sider>
        <Layout>
          <Styles.AppHeader>
            <Styles.MenuCursorIcon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Styles.AppHeaderContent>
              <Styles.AppHeaderContentName>{translateObj.HI}{userName}</Styles.AppHeaderContentName>
              <Styles.AppHeaderContentLanguage>
                <Selector selectorWidth={110} defaultValue="zhTW" optionList={languageData} onSelectChange={this.onLanguageChange} />
              </Styles.AppHeaderContentLanguage>
              <Styles.AppHeaderContentLogout src={logout_icon} title={translateObj.LOGOUT} onClick={logout} />
            </Styles.AppHeaderContent>
          </Styles.AppHeader>
          <Styles.MenuContent>
            <Switch>
              <Route default path="/app/about" component={LoadableAboutMe} />
              <Route path="/app/portfolio" component={LoadablePortfolio} />
              <Route path="/app/badge" component={LoadableBadge} />
              <Route path="/app/card" component={LoadableCard} />
              <Route path="/app/ringchart" component={LoadableRing} />
              <Route path="/app/mixchart" component={LoadableMixChart} />
            </Switch>
          </Styles.MenuContent>
        </Layout>
      </Styles.AppLayout>
    );
  }
}
