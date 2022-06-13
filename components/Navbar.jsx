import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LoginForm from './LoginForm';
import { toast } from 'react-hot-toast';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import SearchBar from './SearchBar';
import { useSession, signIn, signOut } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  // data adalah data user yg login dngn google akun
  const { data: session } = useSession();
  // console.log(session);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="pr-4 md:pr-16 pl-4 md:pl-16 pt-6 pb-12 md:pb-6 bg-gray-900 text-gray-100 z-30">
        <div className="flex justify-between list-none ">
          <Link href={`/`}>
            <div className="hover:cursor-pointer">
              <p className="text-gray-50 tracking-widest text-3xl mb-2">
                USP <span className="border-b-4 border-fuchsia-400">Store</span>
              </p>
              <p className="text-[12px] italic">
                Kaos, percetakan dan jasa sablon
              </p>
            </div>
          </Link>
          <div className="flex space-x-1 items-center">
            {!session ? (
              <>
                <button onClick={signIn}>
                  <div className="flex  items-center text-gray-400 hover:cursor-pointer">
                    <p className="text-xs">Masuk</p>
                    <PersonOutlineIcon className="text-3xl" />
                  </div>
                </button>

                {/* <div
                  onClick={handleNav}
                  className="flex items-center cursor-pointer">
                  <p>Login</p>
                  {nav ? (
                    <>
                      <ArrowDropDownIcon className="text-3xl" />
                    </>
                  ) : (
                    <ArrowRightIcon className="text-3xl" />
                  )}
                </div>
                <div
                  className={
                    nav
                      ? 'visible absolute top-[135px] md:top-[110px] left-0 right-0 bg-gray-100 p-2  h-[800px]  z-40 shadow-2xl'
                      : 'hidden'
                  }>
                  <LoginForm />
                </div> */}
              </>
            ) : (
              <div
                onClick={handleNav}
                className="flex items-center text-xs relative">
                {session?.user?.name}
                <img
                  src={session?.user?.image}
                  alt="user"
                  className="rounded-full w-5 h-5 ml-1 bg-none hover:cursor-pointer"
                />
                {nav ? (
                  <>
                    <ArrowDropDownIcon className="" />
                  </>
                ) : (
                  <ArrowRightIcon className="" />
                )}
                <div
                  className={
                    nav
                      ? 'visible  bg-gray-100   h-[100px] w-[150px] absolute top-[90%] right-[5%] z-[100]  shadow-2xl rounded-b-xl rounded-tl-xl '
                      : 'hidden'
                  }>
                  <div className="text-gray-900">
                    <div className="hover:bg-slate-300 rounded-tl-xl p-1 cursor-pointer">
                      <ShoppingBagOutlinedIcon />
                      My order history
                    </div>
                    <div className="hover:bg-slate-300 p-1 cursor-pointer flex">
                      <img
                        src={session?.user?.image}
                        alt="user"
                        className="rounded-full w-5 h-5 ml-1 bg-none hover:cursor-pointer"
                      />
                      My profile
                    </div>
                    <div
                      onClick={signOut}
                      className="hover:bg-slate-300 rounded-b-xl p-1 cursor-pointer">
                      <LogoutIcon />
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            )}

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
        {/* <SearchBar /> */}
      </div>
    </div>
  );
};

export default Navbar;
