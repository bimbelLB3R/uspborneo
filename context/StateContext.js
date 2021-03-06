import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
// import cookie from 'js-cookie';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const [cartItems2, setCartItems2] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [itemBarang, setItemBarang] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    {
      product.diskon
        ? setTotalPrice(
            (prevTotalPrice) => prevTotalPrice + product.pricedis * quantity
          )
        : setTotalPrice(
            (prevTotalPrice) => prevTotalPrice + product.price * quantity
          );
    }

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    {
      foundProduct.diskon
        ? setTotalPrice(
            (prevTotalPrice) =>
              prevTotalPrice - foundProduct.pricedis * foundProduct.quantity
          )
        : setTotalPrice(
            (prevTotalPrice) =>
              prevTotalPrice - foundProduct.price * foundProduct.quantity
          );
    }

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === 'inc') {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      {
        foundProduct.diskon
          ? setTotalPrice(
              (prevTotalPrice) => prevTotalPrice + foundProduct.pricedis
            )
          : setTotalPrice(
              (prevTotalPrice) => prevTotalPrice + foundProduct.price
            );
      }

      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        {
          foundProduct.diskon
            ? setTotalPrice(
                (prevTotalPrice) => prevTotalPrice - foundProduct.pricedis
              )
            : setTotalPrice(
                (prevTotalPrice) => prevTotalPrice - foundProduct.price
              );
        }

        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };
  /*
  // useEffect(() => {
  //   const cartData = JSON.parse(localStorage.getItem('MY_APP_STATE'));
  //   if (cartData) {
  //     setCartItems(cartData);
  //   }
  // }, []);
  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    const datas = JSON.parse(data);
    if (datas !== null) setCartItems2(datas);
    // console.log(datas);
  }, []);
  // console.log(cartItems2);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(cartItems));
  }, [cartItems]); */

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        // cartItems2,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        setItemBarang,
        itemBarang,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
