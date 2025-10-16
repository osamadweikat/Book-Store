import "./cart.css";
import { cartInfo } from "../../data/cart";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";

export default function Cart() {
  const totalPrice = cartInfo.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
}
