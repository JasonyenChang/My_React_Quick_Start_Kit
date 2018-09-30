import styled from 'styled-components';
import { Layout, Icon } from 'antd';

const { Header, Content } = Layout;
export const AppLayout = styled(Layout)`
  height: 100vh;
`;

export const AppHeader = styled(Header)`
  background-color: rgba(128, 128, 128, 1);
  padding-left: 15px;
  color: white;
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
