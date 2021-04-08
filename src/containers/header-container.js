import React, { useState } from "react";
import { Header } from "../components";

// Header bar
export default function HeaderContainer() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  return (
    <>
      <Header
        hamburgerIsOpen={hamburgerIsOpen}
        setHamburgerIsOpen={setHamburgerIsOpen}
      />
    </>
  );
}
