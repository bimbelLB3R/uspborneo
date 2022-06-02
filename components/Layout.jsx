import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import SearchBar from './SearchBar';
import { client } from '../lib/client';
// import SearchBar from '../pages/SearchBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
