import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
import Keranjang from './Keranjang';

const BackBar = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 bg-gray-100 p-2 pr-4 flex items-center justify-between left-0 right-0 w-full z-50 cursor-pointer">
        <Link href="/">
          <div>
            <ArrowBackIosIcon />
            <span>Back</span>
          </div>
        </Link>
        <Keranjang />
      </div>
    </div>
  );
};

export default BackBar;
