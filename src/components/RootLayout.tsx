import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSeedling, faFileAlt,faTractor , faCogs, faUsers, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';


const { Header, Sider, Content } = Layout;

const RootLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <FontAwesomeIcon icon={faHome} />,
              label: 'DashBoard',
            },
            {
              key: '2',
              icon:   <FontAwesomeIcon icon={faSeedling} />,
              label: 'Crops',
            },
            {
              key: '3',
              icon: <FontAwesomeIcon icon={faTractor} />,
              label: 'Fields',
            },
            {
                key: '4',
                icon:<FontAwesomeIcon icon={faFileAlt} />,
                label: 'Logs',
              },
              {
                key: '5',
                icon: <FontAwesomeIcon icon={faCogs} />,
                label: 'Equipment',
              },
              {
                key: '6',
                icon: <FontAwesomeIcon icon={faUsers} />,
                label: 'Staff',
              },
              {
                key: '7',
                icon: <FontAwesomeIcon icon={faTruck} />,
                label: 'Vehicles',
              },
              {
                key: '8',
                icon:  <FontAwesomeIcon icon={faUser} />,
                label: 'Users',
              },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;