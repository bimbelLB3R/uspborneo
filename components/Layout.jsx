import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import SearchBar from './SearchBar';
import { client } from '../lib/client';
import { AppBar } from '@mui/material';
// import SearchBar from '../pages/SearchBar';
// import { useSession, signIn, signOut } from 'next-auth/react';

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
