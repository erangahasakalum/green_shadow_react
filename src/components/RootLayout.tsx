import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSeedling, faFileAlt,faTractor , faCogs, faUsers, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import { Outlet ,useNavigate} from 'react-router-dom';


const { Header, Sider, Content } = Layout;

const RootLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/']}
          onClick={({key}) => navigate(key)}
          items={[
            {
              key: '/',
              icon: <FontAwesomeIcon icon={faHome} />,
              label: 'DashBoard',
            },
            {
              key: '/crop',
              icon:   <FontAwesomeIcon icon={faSeedling} />,
              label: 'Crops',
            },
            {
              key: '/field',
              icon: <FontAwesomeIcon icon={faTractor} />,
              label: 'Fields',
             
            },
            {
                key: '/log',
                icon:<FontAwesomeIcon icon={faFileAlt} />,
                label: 'Logs',
              },
              {
                key: '/equipment',
                icon: <FontAwesomeIcon icon={faCogs} />,
                label: 'Equipment',
              },
              {
                key: '/staff',
                icon: <FontAwesomeIcon icon={faUsers} />,
                label: 'Staff',
              },
              {
                key: '/vehicle',
                icon: <FontAwesomeIcon icon={faTruck} />,
                label: 'Vehicles',
              },
              {
                key: '/user',
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
            minHeight: 505,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;