import React from 'react';
import * as Styles from './style';

export default class Login extends React.Component {
  goToApp = () => {
    this.props.history.push('/app');
  }

  render() {
    return (
      <Styles.LoginButton onClick={this.goToApp}>Login</Styles.LoginButton>
    );
  }
}
