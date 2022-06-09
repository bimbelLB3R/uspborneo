import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LoginForm from './LoginForm';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import SearchBar from './SearchBar';
import { useSession, signIn, signOut } from 'next-auth/react';

const Keranjang = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  // data adalah data user yg login dngn google akun
  const { data: session } = useSession();
  // console.log(session);

  return (
    <div>
      <div className="  text-gray-900 z-50">
        <div className="flex justify-between list-none ">
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}>
            <span className="cart-item-qty">{totalQuantities}</span>
            <AiOutlineShopping />
          </button>

          {showCart && <Cart />}
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
