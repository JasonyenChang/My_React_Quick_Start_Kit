import styled from 'styled-components';
import { Layout, Icon } from 'antd';

const { Header, Content } = Layout;
export const AppLayout = styled(Layout)`
  height: 100vh;
`;

export const AppHeader = styled(Header)`
  background-color: rgba(128, 128, 128, 1);
  padding-left: 15px;
  padding-right: 0px;
  color: white;
`;

export const AppHeaderContent = styled.div`
  border: 1px solid yellow;
  float: right;
  display: flex;
  width: 300px;
  height: 64px;
`;

export const AppHeaderContentName = styled.div`
  border: 1px solid red;
  width: 140px;
  height: 64px;
  text-align: right;
  padding-right: 10px;
`;

export const AppHeaderContentLanguage = styled.div`
  border: 1px solid blue;
  width: 110px;
  height: 64px;
  text-align: right;
  padding-right: 10px;
`;

export const AppHeaderContentLogout = styled.div`
  border: 1px solid white;
  width: 50px;
  height: 64px;
  text-align: right;
  padding-right: 10px;
`;

export const MenuCursorIcon = styled(Icon)`
  &.anticon svg {
    cursor: pointer;
  }
`;

export const MenuContent = styled(Content)`
  margin: 24px 16px;
  background: #F0F2F5;
  min-height: 280;
`;

export const MenuTitle = styled.div`
  padding-top: 15px;
`;
