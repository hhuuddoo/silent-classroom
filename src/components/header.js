import React from "react";
// import logo from "../images/logo.svg";
import { ReactComponent as Logo } from "../images/logo.svg";

export default function Header(props) {
  const { hamburgerIsOpen, setHamburgerIsOpen } = props;

  return (
    <header className="header">
      <nav className="container">
        <a className="header__logo" href="">
          <Logo />
        </a>
        <a
          href="#"
          onClick={() => setHamburgerIsOpen((prev) => !prev)}
          className={`header__hamburger hide-on-desktop ${
            hamburgerIsOpen ? `header__hamburger--open` : ``
          }`}
        >
          <span className="hamburger--top"></span>
          <span className="hamburger--bottom"></span>
        </a>
        <div className="header__links hide-on-mobile">
          <a href="">Login</a>
          <a href="">Register</a>
          <a href="">Create Board</a>
        </div>
        <div className="header__menu">
          <a href="">Create Board</a>
          <a href="">Register</a>
          <a href="">Login</a>
        </div>
      </nav>
    </header>
  );
}
