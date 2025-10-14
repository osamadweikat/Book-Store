import "./header.css";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderMiddle />
      <Navbar />
    </div>
  );
}
