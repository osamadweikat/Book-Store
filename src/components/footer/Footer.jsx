import "./footer.css";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";

export default function Footer() {
  return (
    <footer className="footer">
      <FooterSocialMedia />
      <FooterLinks />
    </footer>
  );
}
