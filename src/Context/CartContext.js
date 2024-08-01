import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemExists = prevCart.some(cartItem => cartItem.id === item.id);
      if (itemExists) {
        return prevCart;
      } else {
        return [...prevCart, item]; 
      }
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const toggleWishlist = (item) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.find(wishItem => wishItem.id === item.id)) {
        return prevWishlist.filter((wishItem) => wishItem.id !== item.id);
      } else {
        return [...prevWishlist, item];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, wishlist, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
