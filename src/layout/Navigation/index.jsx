import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  GoldOutlined,
  UserOutlined,
  DeploymentUnitOutlined,
  DashboardOutlined,
  BankOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/" />
            Home Page
          </Menu.Item>
          
          <Menu.Item key="2" icon={<BankOutlined />}>
            <Link to="/company" />
            Company
          </Menu.Item>

          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/user" />
            User
          </Menu.Item>
          
          <Menu.Item key="4" icon={<GoldOutlined />}>
            <Link to="/unit" />
            Unit
          </Menu.Item>

          <Menu.Item key="5" icon={<DeploymentUnitOutlined />}>
            <Link to="/asset" />
            Asset
          </Menu.Item>
          
          
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
