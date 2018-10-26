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
  float: right;
  display: flex;
  width: auto;
  height: 64px;
`;

export const AppHeaderContentName = styled.div`
  width: auto;
  height: 64px;
  text-align: right;
  padding-right: 10px;
`;

export const AppHeaderContentLanguage = styled.div`
  width: 110px;
  height: 64px;
  text-align: right;
  padding-right: 10px;
`;

export const AppHeaderContentLogout = styled.img`
  width: 32px;
  height: 32px;
  color: white;
  margin-top: 15px;
  margin-left: 10px;
  cursor: pointer;
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
  overflow-y: auto;
`;

export const MenuTitle = styled.div`
  padding-top: 15px;
`;
