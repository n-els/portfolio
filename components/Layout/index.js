import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <main className="min-w-screen min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
