export default function FooterLinks() {
  return (
    <div className="footer-links">
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Register</li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Palestine - Nablus - Rafidia Street
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              0123-456-789
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              info@bookstore.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            At Book Store, we believe that every book opens a new world filled
            with imagination, knowledge, and inspiration. Our mission is to
            connect readers with stories that inspire, educate, and entertain,
            while supporting authors and spreading the love of reading across
            all generations. Whether you're searching for self-development,
            fiction, or academic titles, our carefully curated collection
            ensures that every visitor finds the perfect book to match their
            taste.
          </p>
        </div>
      </div>
    </div>
  );
}
