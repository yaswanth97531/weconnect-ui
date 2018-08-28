import React from 'react';

import NavBar from '../../components/HomeNavigation';
import Header from './../../components/Header';
import StickyHeader from './../../components/StickyHeader';

const Home = () => {
  return (
    <div>
      <Header />
      <StickyHeader />
      <NavBar />
    </div>
  );
}

export default Home;