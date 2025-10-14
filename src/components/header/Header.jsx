import { useState } from "react";
import "./header.css";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <HeaderTop toggle={toggle} setToggle={setToggle} />
      <HeaderMiddle />
      <Navbar toggle={toggle} setToggle={setToggle} />
    </div>
  );
}
