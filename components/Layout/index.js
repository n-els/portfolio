import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col max-w-5xl px-4 m-auto min-h-screen">
      <Header />
      <main className="min-w-screen">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
