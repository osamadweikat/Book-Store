import "./cart.css";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../context/cartContext";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
}
