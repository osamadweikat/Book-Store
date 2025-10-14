import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-menu">
          <i className="bi bi-list"></i>
        </div>
        <div className="header-top-phone">
          <i className="bi bi-telephone-fill"></i>0123-456-789
        </div>
        <div className="header-top-text">Welcome To Online Book Store</div>
        <div className="header-top-link">
          <i className="bi bi-person-fill"></i>Login
        </div>
      </div>
      <div className="header-middle">
        <div className="header-middle-logo">
          <b>Book</b>
          <i className="bi bi-book"></i>
          <b>Store</b>
        </div>
        <div className="header-middle-search-box">
          <input
            className="header-middle-search-input"
            type="search"
            placeholder="Search in book store..."
          />
          <i className="bi bi-search"></i>
        </div>
        <div className="header-middle-cart-wrapper">
          <i className="bi bi-cart2"></i>
        </div>
      </div>
    </div>
  );
}
