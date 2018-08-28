import React from 'react';
import { Layout, Menu} from 'antd';
import './stickyHeader.css';

const StickyHeader = () => {
  return(
    <Layout className="header-layout">
      <div class="header-container">
        <div class="menu-container">
          <Menu
          className="menu"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </div>
      </div>
     </Layout>     
  );
  
}

export default StickyHeader;