import React from 'react';
import { Menu } from 'antd';

const RightMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="1">
        <a href="">Home</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="">About Us</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="">Services</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="">Contact Us</a>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
