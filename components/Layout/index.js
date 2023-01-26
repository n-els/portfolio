import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="max-w-5xl px-4 m-auto">
      <Header />
      <main className="min-w-screen min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
