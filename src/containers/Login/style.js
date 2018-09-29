import styled from 'styled-components';
import { Input, Button } from 'antd';

export const LoginBody = styled.div`
  height: 100vh;
  background-color: #EBEFF6;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 3px;
  background-color: #F7F7F7;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const LoginTitle = styled.div`
  text-align: center;
  font-size: 28px;
  color: black;
  margin-top: 80px;
  font-weight: lighter;
  padding-bottom: 20px;
`;

export const LoginInput = styled(Input)`
  &.ant-input {
    width: 200px;
    height: 30px;
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const LoginButton = styled(Button)`
  &.ant-btn-primary {
    width: 200px;
    margin-top: 30px;
  }
`;
