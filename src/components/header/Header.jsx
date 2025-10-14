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
    </div>
  );
}
