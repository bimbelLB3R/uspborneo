import React, { useRef, useState } from 'react';
import Link from 'next/link';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';
// const today = new Date();
// import MyOrder from './MyOrder';
// import NumberFormat from './NumberFormat';
import Cookie from 'js-cookie';

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    // cartItems2,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();
  /*
  const [cartItems, setCartItems] = useState(cartItems2);
  {
    console.log(cartItems);
  }*/
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper text-gray-900" ref={cartRef}>
      <div className="bg-gray-50 h-[100vh] max-w-xl">
        <button
          type="button"
          className="flex items-center space-x-6 p-6 bg-gray-100 w-full"
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="">Your Cart</span>
          <span className="text-red-500">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="flex items-center justify-center">
            <div>
              <AiOutlineShopping size={150} className="text-center" />
              <h3 className="text-center">Your shopping bag is empty</h3>
              <Link href="/">
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="btn">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
        {/* {console.log(cartItems)} */}
        {/* edit cart */}
        <div className="overscroll-contain overflow-scroll h-[70vh] px-8">
          <div>
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="w-full  flex mb-4 shadow hover:shadow-lg ">
                  <div className="w-[100px] p-2">
                    <img src={urlFor(item?.image[0])} className="object-fit" />
                  </div>

                  <div className=" w-full">
                    <div className="w-full flex items-center px-8 justify-between text-xs capitalize ">
                      {item.diskon ? (
                        <p className="text-xs md:text-lg">
                          {item.name}
                          <span className=" text-red-600 text-xs mt-2">
                            (Off {item.diskon}%)
                          </span>
                        </p>
                      ) : (
                        <p className="text-xs md:text-lg">{item.name}</p>
                      )}
                      {item.diskon ? (
                        <p className="text-xs md:text-lg">
                          Rp {item.pricedis * item.quantity}
                        </p>
                      ) : (
                        <p className="text-xs md:text-lg">
                          Rp {item.price * item.quantity}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-between px-8 space-x-6">
                      <div className="flex space-x-6 items-center">
                        <span
                          className="border-2 border-green-700  cursor-pointer"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, 'dec')
                          }>
                          <AiOutlineMinus />
                        </span>
                        <span className="" onClick="">
                          {item.quantity}
                        </span>
                        <span
                          className="border-2 border-green-700 hover:cursor-pointer"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, 'inc')
                          }>
                          <AiOutlinePlus />
                        </span>
                      </div>
                      <button
                        type="button"
                        className="text-3xl text-red-500"
                        onClick={() => onRemove(item)}>
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* {console.log(cartItems)} */}
        {cartItems.length >= 1 && (
          <div className=" bg-gray-100 p-6">
            <div className="flex px-10 items-center justify-between font-bold">
              <h3>Subtotal:</h3>
              <h3>Rp {totalPrice}</h3>
            </div>
            <div className="flex justify-center px-10 mb-10">
              <div className="bg-red-500 rounded-full px-6 py-2 text-gray-50">
                {/* <Link
                  href={
                    'https://wa.me/+6281392552459?text=Kirim Kode Pesanan Anda ke Admin: ' +
                    totalQuantities +
                    '-USP-' +
                    totalPrice +
                    '/' +
                    today.getFullYear() +
                    (today.getMonth() + 1) +
                    today.getDate()
                  }>
                  Bayar Sekarang
                </Link> */}
                <button type="button" onClick={handleCheckout}>
                  Bayar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
