import { useState } from "react";
import CartContext from "./cartContext";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prev) => [...prev, item]);
  }

  function removeFromCart(id) {
    const cart = cartItems.filter((c) => c.id !== id);
    setCartItems(cart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
