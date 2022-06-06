import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import { useSession, signIn, signOut } from 'next-auth/react';

const welcome = () => {
  const {
    totalQuantities,
    totalPrice,
    cartItems,
    setCartItems,
    setTotalPrice,
    setTotalQuantities,
  } = useStateContext();
  const { data: session } = useSession();
  useEffect(() => {
    localStorage.clear();
    setCartItems(cartItems);
    setTotalPrice(totalPrice);
    setTotalQuantities(totalQuantities);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <img
          src={session?.user?.image}
          alt="user"
          className="rounded-full w-20 h-20 ml-1 bg-none hover:cursor-pointer"
        />
        <h2>Selamat Datang Kak </h2>
        <h3>{session?.user?.name}</h3>
        <p className="email-msg">Terimakasih sudah log in</p>
        <p className="description">
          Yuk, kepoin produk baru di USP Store, dapatkan promonya! Silahkan
          kirim email ke
          <a className="email" href="mailto:uspstore@gmail.com">
            uspstore@gmail.com
          </a>
          jika ada pertanyaan, saran, atau keluhan...
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Lanjut Belanja
          </button>
        </Link>
      </div>
    </div>
  );
};

export default welcome;
