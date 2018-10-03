import React from 'react';
import { Menu, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import translateStore from 'stores/translateStore';
import * as Styles from './style';

@inject('translateStore')
export default class SideMenu extends React.PureComponent {
  render() {
    const { translateObj } = this.props.translateStore;
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Styles.MenuItem key="1" onClick={() => this.props.navigate('/app/about')}>
          <Icon type="user" />
          <span>{translateObj.ABOUT_ME}</span>
        </Styles.MenuItem>
        <Styles.MenuItem key="2" onClick={() => this.props.navigate('/app/portfolio')}>
          <Icon type="video-camera" />
          <span>{translateObj.PORTFOLIO}</span>
        </Styles.MenuItem>
      </Menu>
    );
  }
}
