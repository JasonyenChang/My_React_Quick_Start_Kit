import styled from 'styled-components';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
export const AppLayout = styled(Layout)`
  height: 100vh;
`;

export const AppHeader = styled(Header)`
  background-color: rgba(128, 128, 128, 1);
  padding-left: 15px;
  color: white;
`;
