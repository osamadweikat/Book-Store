import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          Follow us on social media
        </div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-twitter"></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i className="bi bi-snapchat"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
