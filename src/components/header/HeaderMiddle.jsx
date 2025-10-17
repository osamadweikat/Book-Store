import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";

export default function HeaderMiddle() {
  const { cartItemsLength } = useContext(CartContext);
  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </Link>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search in book store..."
        />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartItemsLength > 0 && (
          <b className="cart-notification">{cartItemsLength}</b>
        )}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
}
