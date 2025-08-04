import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // full height of the viewport
  };

  const mainContentStyle = {
    flex: 1, // pushes footer to bottom when content is short
    // padding: '1rem',
    backgroundColor: '#faf1ecff' 
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <main style={mainContentStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
