import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--items">
          <li className="header__nav--item">
            <a href="">
              <Logo />
            </a>
          </li>
          <li className="header__nav--item">
            <a href="">Login</a>
          </li>
          <li className="header__nav--item">
            <a href="">Signup</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
