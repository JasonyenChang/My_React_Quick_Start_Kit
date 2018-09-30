import React from 'react';
import { Menu, Icon } from 'antd';
import * as Styles from './style';

export default class SideMenu extends React.PureComponent {
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Styles.MenuItem key="1" onClick={() => this.props.navigate('/app/about')}>
          <Icon type="user" />
          <span>About me</span>
        </Styles.MenuItem>
        <Styles.MenuItem key="2" onClick={() => this.props.navigate('/app/portfolio')}>
          <Icon type="video-camera" />
          <span>Portfolio</span>
        </Styles.MenuItem>
      </Menu>
    );
  }
}
