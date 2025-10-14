import "./header.css";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

export default function Header() {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderMiddle />
    </div>
  );
}
