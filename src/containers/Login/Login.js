import React from 'react';
import * as Styles from './style';

export default class Login extends React.Component {
  goToApp = () => {
    this.props.history.push('/app');
  }

  render() {
    return (
      <Styles.LoginBody>
        <Styles.LoginContainer>
          <Styles.LoginTitle>Log-in</Styles.LoginTitle>
          <Styles.LoginInput placeholder="User name" />
          <Styles.LoginInput placeholder="Password" type="password" />
          <Styles.LoginButton type="primary" onClick={this.goToApp}>Login</Styles.LoginButton>
        </Styles.LoginContainer>
      </Styles.LoginBody>
    );
  }
}
