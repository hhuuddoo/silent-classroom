import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

export default function Header({ hamburgerIsOpen }) {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--items">
          <li className="header__nav--item logo">
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
          <li className="header__nav--item hamburger hamburger--open">
            <a href="">
              <span className="hamburger__top"></span>
              <span className="hamburger__bottom"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
