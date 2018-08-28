import React from 'react';
import { Layout, Menu} from 'antd';
import './header.css';

const { Header } = Layout;

const HeaderNav = () => {
  return(
    <Layout className="header-layout">
      <div class="header-container">
        <Header class="header">
          <div>Upgrade</div>
          <div>WeConnect</div>
          <div>Sign In</div>
        </Header>
      </div>
     </Layout>     
  );
  
}

export default HeaderNav;