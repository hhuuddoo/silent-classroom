import React from "react";
// import logo from "../images/logo.svg";
import { ReactComponent as Logo } from "../images/logo.svg";

export default function Header(props) {
  const { hamburgerIsOpen, setHamburgerIsOpen } = props;

  const toggleHamburger = () => {
    setHamburgerIsOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div
        className={`overlay hide-on-desktop ${
          hamburgerIsOpen ? `hamburger--open` : ``
        }`}
      ></div>
      <nav className="container">
        <a className="header__logo" href="">
          <Logo />
        </a>
        <a
          href="#"
          onClick={toggleHamburger}
          className={`header__hamburger hide-on-desktop ${
            hamburgerIsOpen ? `header__hamburger--open` : ``
          }`}
        >
          <span className="hamburger--top"></span>
          <span className="hamburger--bottom"></span>
        </a>
        <div className="header__links hide-on-mobile">
          <a className="button" href="">
            Login
          </a>
          <a className="button" href="">
            Register
          </a>
          <a className="button button--cta" href="">
            Create Board
          </a>
        </div>
        <div
          className={`header__menu hide-on-desktop ${
            hamburgerIsOpen ? `hamburger--open` : ``
          }`}
        >
          <a className="button button--cta" href="">
            Create Board
          </a>
          <a className="button" href="">
            Register
          </a>
          <a className="button" href="">
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}
