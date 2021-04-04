import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-header__nav">
        <ul className="main-header__nav--items">
          <li className="main-header__nav--item">
            <a href="">
              <Logo />
            </a>
          </li>
          <li className="main-header__nav--item">
            <a href="">Login</a>
          </li>
          <li className="main-header__nav--item">
            <a href="">Signup</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
