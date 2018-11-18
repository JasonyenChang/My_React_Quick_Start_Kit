import React from 'react';
import { Form, Icon, Input } from 'antd';
import * as Styles from './style';

const FormItem = Form.Item;

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const user = {
          UserName: values.userName,
          AccessToken: 'xxxxoooo'
        };
        sessionStorage.clear();
        sessionStorage.setItem('User', JSON.stringify(user));
        this.props.history.push('/app/about');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Styles.LoginBody>
        <Styles.LoginContainer>
          <Styles.LoginTitle>Log-in</Styles.LoginTitle>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your user name!' }]
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }]
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Styles.LoginButton type="primary" htmlType="submit">Login</Styles.LoginButton>
            </FormItem>
          </Form>
        </Styles.LoginContainer>
      </Styles.LoginBody>
    );
  }
}

export default Form.create()(Login);
