import React from 'react';
import { useStateContext } from '../context/StateContext';

const MyOrder = () => {
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();
  return (
    <div>
      {cartItems.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};

export default MyOrder;
