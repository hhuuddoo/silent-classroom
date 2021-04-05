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
          href=""
          // onClick={() => setHamburgerIsOpen((prev) => !prev)}
          className={`header__hamburger ${
            hamburgerIsOpen ? `header__hamburger--open` : ``
          }`}
        >
          <span className="hamburger--top"></span>
          <span className="hamburger--bottom"></span>
        </a>
        <div className="header__links hide-on-mobile">
          <a href="">Login</a>
          <a href="">Signup</a>
        </div>
      </nav>
    </header>
  );
}
