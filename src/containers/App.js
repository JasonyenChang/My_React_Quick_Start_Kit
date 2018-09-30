import React from 'react';
import './app.css';
import { Layout, Icon } from 'antd';
import SideMenu from 'components/SideMenu/SideMenu';
import * as Styles from './style';

const { Sider, Content } = Layout;
export default class App extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Styles.AppLayout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <SideMenu />
        </Sider>
        <Layout>
          <Styles.AppHeader>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Styles.AppHeader>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Styles.AppLayout>
    );
  }
}
