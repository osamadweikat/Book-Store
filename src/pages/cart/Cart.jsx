import { cartInfo } from "../../data/cart";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <div key={item.id} className="cart-items">
              <img
                src={`/books/${item.image}`}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-book-title">
                    <b>Title: </b> {item.title}
                  </div>
                  <div className="cart-item-author">
                    <b>Author: </b> {item.author}
                  </div>
                </div>
                <div className="cart-item-quantity">
                  <button>
                    <i className="bi bi-plus-lg"></i>
                  </button>
                  <b>{item.quantity}</b>
                  <button>
                    <i className="bi bi-dash-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-order-summary">Order Summary</div>
    </div>
  );
}
